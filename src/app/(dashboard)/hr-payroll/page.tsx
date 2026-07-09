import FeatureModulePage from "@/components/FeatureModulePage";
import { getModuleConfig } from "@/lib/module-features";
import { Users } from "lucide-react";

export default function Page() {
  const config = getModuleConfig("hr-payroll")!;
  return <FeatureModulePage config={config} icon={<Users size={28} />} />;
}
