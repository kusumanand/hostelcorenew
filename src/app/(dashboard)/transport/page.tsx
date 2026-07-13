import FeatureModulePage from "@/components/FeatureModulePage";
import { getModuleConfig } from "@/lib/module-features";
import { Bus } from "lucide-react";

export default function Page() {
  const config = getModuleConfig("transport")!;
  return <FeatureModulePage config={config} icon={<Bus size={28} />} />;
}
