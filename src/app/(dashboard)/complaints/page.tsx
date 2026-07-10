import FeatureModulePage from "@/components/FeatureModulePage";
import { getModuleConfig } from "@/lib/module-features";
import { MessageSquareWarning } from "lucide-react";

export default function Page() {
  const config = getModuleConfig("complaints")!;
  return <FeatureModulePage config={config} icon={<MessageSquareWarning size={28} />} />;
}
