// app/workspace/page.tsx ← SERVER component
import { auth } from "~/server/auth";
import { redirect } from "next/navigation";
import WorkspaceUI from "~/app/_components/workspaceUI";

export default async function WorkspacePage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/api/auth/signin");
  }

  return <WorkspaceUI />;
}
