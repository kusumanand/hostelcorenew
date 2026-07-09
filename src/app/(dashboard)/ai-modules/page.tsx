import FeatureModulePage from "@/components/FeatureModulePage";
import { getModuleConfig } from "@/lib/module-features";
import { Sparkles } from "lucide-react";

export default function Page() {
  const config = getModuleConfig("ai-modules")!;
  return <FeatureModulePage config={config} icon={<Sparkles size={28} />} />;
}
