import { auth } from "~/server/auth";
import { redirect } from "next/navigation";
import WorkspaceUI from "~/app/_components/workspaceUI";
import { createCaller } from "~/server/api/root";
import { db } from "~/server/db";
import { headers as nextHeaders } from "next/headers";
import type { inferRouterOutputs } from "@trpc/server";
import type { AppRouter } from "~/server/api/root";

type Base = inferRouterOutputs<AppRouter>["base"]["getAll"][number];

export default async function WorkspacePage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/api/auth/signin");
  }

  const caller = createCaller({
    session,
    db,
    headers: nextHeaders() as unknown as Headers,
  });

  const bases = await caller.base.getAll();

  return (
    <WorkspaceUI
      baseList={bases.map((b: Base) => [
        b.title,
        new Date(b.lastAccessed).toLocaleString(),
      ])}
    />
  );
}
