import FeatureModulePage from "@/components/FeatureModulePage";
import { getModuleConfig } from "@/lib/module-features";
import { BookOpenCheck } from "lucide-react";

export default function Page() {
  const config = getModuleConfig("student-productivity")!;
  return <FeatureModulePage config={config} icon={<BookOpenCheck size={28} />} />;
}
