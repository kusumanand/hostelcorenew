import FeatureModulePage from "@/components/FeatureModulePage";
import { getModuleConfig } from "@/lib/module-features";
import { Wallet } from "lucide-react";

export default function Page() {
  const config = getModuleConfig("fees-accounting")!;
  return <FeatureModulePage config={config} icon={<Wallet size={28} />} />;
}
