"use client";

import { useCallback, useEffect, useState } from "react";
import { prefixFromFeatureName } from "@/lib/feature-behavior";

/** A single saved entry for a feature. */
export interface FeatureRecord {
  id: string;
  /** Human-readable, auto-generated identifier, e.g. EMP-0001 */
  recordCode: string;
  createdAt: string;
  updatedAt?: string;
  [key: string]: string | boolean | undefined;
}

function storageKey(moduleSlug: string, featureSlug: string) {
  return `hostel:records:${moduleSlug}:${featureSlug}`;
}

function counterKey(moduleSlug: string, featureSlug: string) {
  return `hostel:idseq:${moduleSlug}:${featureSlug}`;
}

function readFromStorage(key: string): FeatureRecord[] {
  if (typeof window === "undefined") return [];

  try {
    const raw = window.localStorage.getItem(key);

    if (!raw) return [];

    const parsed = JSON.parse(raw);

    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function nextRecordCode(
  moduleSlug: string,
  featureSlug: string,
  featureName: string
): string {
  const key = counterKey(moduleSlug, featureSlug);

  let n = 1;

  try {
    const raw = window.localStorage.getItem(key);

    n = raw ? parseInt(raw, 10) + 1 : 1;

    window.localStorage.setItem(key, String(n));
  } catch {
    // If localStorage fails, use timestamp
    n = Number(String(Date.now()).slice(-4));
  }

  const prefix = prefixFromFeatureName(featureName);

  return `${prefix}-${String(n).padStart(4, "0")}`;
}

/**
 * Stores records in localStorage.
 */
export function useFeatureRecords(
  moduleSlug: string,
  featureSlug: string,
  featureName: string
) {
  const key = storageKey(moduleSlug, featureSlug);

  const [records, setRecords] = useState<FeatureRecord[]>([]);
  const [loaded, setLoaded] = useState(false);

  // Load records when component mounts
  useEffect(() => {
    setRecords(readFromStorage(key));
    setLoaded(true);
  }, [key]);

  // Save records
  const persist = useCallback(
    (next: FeatureRecord[]) => {
      setRecords(next);

      try {
        window.localStorage.setItem(key, JSON.stringify(next));
      } catch {
        // Ignore storage errors
      }
    },
    [key]
  );

  // Add record
  const addRecord = useCallback(
    (values: Record<string, string | boolean>) => {
      const record: FeatureRecord = {
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        recordCode: nextRecordCode(
          moduleSlug,
          featureSlug,
          featureName
        ),
        createdAt: new Date().toISOString(),
        ...values,
      };

      persist([record, ...records]);

      return record;
    },
    [records, persist, moduleSlug, featureSlug, featureName]
  );

  // Update record
  const updateRecord = useCallback(
    (id: string, values: Record<string, string | boolean>) => {
      persist(
        records.map((record) =>
          record.id === id
            ? {
                ...record,
                ...values,
                updatedAt: new Date().toISOString(),
              }
            : record
        )
      );
    },
    [records, persist]
  );

  // Delete record
  const deleteRecord = useCallback(
    (id: string) => {
      persist(records.filter((record) => record.id !== id));
    },
    [records, persist]
  );

  // Remove all records
  const clearAll = useCallback(() => {
    persist([]);
  }, [persist]);

  return {
    records,
    loaded,
    addRecord,
    updateRecord,
    deleteRecord,
    clearAll,
  };
}