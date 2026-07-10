import { notFound } from "next/navigation";
import FeatureDetailPage from "@/components/FeatureDetailPage";
import { getModuleConfig, getFeatureBySlug, slugify } from "@/lib/module-features";
import { ShieldCheck } from "lucide-react";

export function generateStaticParams() {
  const config = getModuleConfig("attendance-security")!;
  return config.features.map((f) => ({ feature: slugify(f.name) }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ feature: string }>;
}) {
  const { feature: featureSlug } = await params;
  const result = getFeatureBySlug("attendance-security", featureSlug);
  if (!result) notFound();
  const { config, feature } = result;

  return <FeatureDetailPage config={config} feature={feature} icon={<ShieldCheck size={28} />} />;
}
