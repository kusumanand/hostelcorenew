import FeatureModulePage from "@/components/FeatureModulePage";
import { getModuleConfig } from "@/lib/module-features";
import { MessageCircle } from "lucide-react";

export default function Page() {
  const config = getModuleConfig("whatsapp-automation")!;
  return <FeatureModulePage config={config} icon={<MessageCircle size={28} />} />;
}
