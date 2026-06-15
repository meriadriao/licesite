import { redirect } from "next/navigation";

export default function ProfissionaisRootPage() {
  redirect("/profissionais/[slug]");
}
