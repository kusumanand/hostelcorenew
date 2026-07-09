import FeatureModulePage from "@/components/FeatureModulePage";
import { getModuleConfig } from "@/lib/module-features";
import { Smartphone } from "lucide-react";

export default function Page() {
  const config = getModuleConfig("mobile-apps")!;
  return <FeatureModulePage config={config} icon={<Smartphone size={28} />} />;
}
