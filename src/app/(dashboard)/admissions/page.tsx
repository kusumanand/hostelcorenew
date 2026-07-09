import FeatureModulePage from "@/components/FeatureModulePage";
import { getModuleConfig } from "@/lib/module-features";
import { ClipboardList } from "lucide-react";

export default function Page() {
  const config = getModuleConfig("admissions")!;
  return <FeatureModulePage config={config} icon={<ClipboardList size={28} />} />;
}
