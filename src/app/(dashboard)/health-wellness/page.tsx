import FeatureModulePage from "@/components/FeatureModulePage";
import { getModuleConfig } from "@/lib/module-features";
import { HeartPulse } from "lucide-react";

export default function Page() {
  const config = getModuleConfig("health-wellness")!;
  return <FeatureModulePage config={config} icon={<HeartPulse size={28} />} />;
}
