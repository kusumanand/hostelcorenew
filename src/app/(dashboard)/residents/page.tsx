import FeatureModulePage from "@/components/FeatureModulePage";
import { getModuleConfig } from "@/lib/module-features";
import { UserCheck } from "lucide-react";

export default function Page() {
  const config = getModuleConfig("residents")!;
  return <FeatureModulePage config={config} icon={<UserCheck size={28} />} />;
}
