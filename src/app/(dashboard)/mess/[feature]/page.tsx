import { notFound } from "next/navigation";
import FeatureDetailPage from "@/components/FeatureDetailPage";
import { getModuleConfig, getFeatureBySlug, slugify } from "@/lib/module-features";
import { UtensilsCrossed } from "lucide-react";

export function generateStaticParams() {
  const config = getModuleConfig("mess")!;
  return config.features.map((f) => ({ feature: slugify(f.name) }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ feature: string }>;
}) {
  const { feature: featureSlug } = await params;
  const result = getFeatureBySlug("mess", featureSlug);
  if (!result) notFound();
  const { config, feature } = result;

  return <FeatureDetailPage config={config} feature={feature} icon={<UtensilsCrossed size={28} />} />;
}
