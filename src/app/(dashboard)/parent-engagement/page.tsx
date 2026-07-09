import FeatureModulePage from "@/components/FeatureModulePage";
import { getModuleConfig } from "@/lib/module-features";
import { Smile } from "lucide-react";

export default function Page() {
  const config = getModuleConfig("parent-engagement")!;
  return <FeatureModulePage config={config} icon={<Smile size={28} />} />;
}
