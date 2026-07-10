import FeatureModulePage from "@/components/FeatureModulePage";
import { getModuleConfig } from "@/lib/module-features";
import { UtensilsCrossed } from "lucide-react";

export default function Page() {
  const config = getModuleConfig("mess")!;
  return <FeatureModulePage config={config} icon={<UtensilsCrossed size={28} />} />;
}
