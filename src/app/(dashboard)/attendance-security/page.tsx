import FeatureModulePage from "@/components/FeatureModulePage";
import { getModuleConfig } from "@/lib/module-features";
import { ShieldCheck } from "lucide-react";

export default function Page() {
  const config = getModuleConfig("attendance-security")!;
  return <FeatureModulePage config={config} icon={<ShieldCheck size={28} />} />;
}
