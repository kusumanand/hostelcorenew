import FeatureModulePage from "@/components/FeatureModulePage";
import { getModuleConfig } from "@/lib/module-features";
import { DoorOpen } from "lucide-react";

export default function Page() {
  const config = getModuleConfig("visitors")!;
  return <FeatureModulePage config={config} icon={<DoorOpen size={28} />} />;
}
