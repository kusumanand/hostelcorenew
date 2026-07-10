import FeatureModulePage from "@/components/FeatureModulePage";
import { getModuleConfig } from "@/lib/module-features";
import { Building2 } from "lucide-react";

export default function Page() {
  const config = getModuleConfig("multi-branch")!;
  return <FeatureModulePage config={config} icon={<Building2 size={28} />} />;
}
