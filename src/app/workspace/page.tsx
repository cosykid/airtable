import { auth } from "~/server/auth";
import { redirect } from "next/navigation";
import WorkspaceUI from "~/app/_components/workspaceUI";
import { createCaller } from "~/server/api/root"; // 👈
import { db } from "~/server/db"; // 👈 for Prisma client
import { headers as nextHeaders } from "next/headers";

export default async function WorkspacePage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/api/auth/signin");
  }

  const caller = createCaller({
    session,
    db,
    headers: nextHeaders() as unknown as Headers, // 👈 cast hack
  }); // 👈 create server-side tRPC caller
  const bases = await caller.base.getAll(); // 👈 this is the actual query

  // now pass data into WorkspaceUI
  return (
    <WorkspaceUI
      baseList={bases.map((b: { title: any; lastAccessed: { toLocaleString: () => any; }; }) => [b.title, b.lastAccessed.toLocaleString()])}
    />
  );
}
