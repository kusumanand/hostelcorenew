import FeatureModulePage from "@/components/FeatureModulePage";
import { getModuleConfig } from "@/lib/module-features";
import { Boxes } from "lucide-react";

export default function Page() {
  const config = getModuleConfig("inventory")!;
  return <FeatureModulePage config={config} icon={<Boxes size={28} />} />;
}
