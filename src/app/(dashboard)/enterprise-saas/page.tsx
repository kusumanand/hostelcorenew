import FeatureModulePage from "@/components/FeatureModulePage";
import { getModuleConfig } from "@/lib/module-features";
import { Cloud } from "lucide-react";

export default function Page() {
  const config = getModuleConfig("enterprise-saas")!;
  return <FeatureModulePage config={config} icon={<Cloud size={28} />} />;
}
