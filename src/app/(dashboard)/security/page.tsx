import FeatureModulePage from "@/components/FeatureModulePage";
import { getModuleConfig } from "@/lib/module-features";
import { BedDouble } from "lucide-react";

export default function Page() {
  const config = getModuleConfig("security")!;
  return <FeatureModulePage config={config} icon={<BedDouble size={28} />} />;
}
