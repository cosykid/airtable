import Link from "next/link";

import { LatestPost } from "~/app/_workspaceComponents/post";
import { redirect } from "next/navigation";
import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await auth();

  if (!session?.user) {
    redirect("/api/auth/signin");
  } else {
    redirect("/workspace")
  }

  // return (
  //   <HydrateClient>
  //     <main className="flex min-h-screen flex-col items-center justify-center bg-white text-black">
  //       <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
  //         <div className="flex flex-col items-center gap-2">
  //           <p className="text-2x">
  //             {hello ? hello.greeting : "Loading tRPC query..."}
  //           </p>

  //           <div className="flex flex-col items-center justify-center gap-4">
  //             <p className="text-center text-2xl">
  //               {session && <span>Logged in as {session.user?.name}</span>}
  //             </p>
  //             <Link
  //               href={session ? "/api/auth/signout" : "/api/auth/signin"}
  //               className="rounded-full bg-red-50 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
  //             >
  //               {session ? "Sign out" : "Sign in"}
  //             </Link>
  //           </div>
  //         </div>

  //       </div>
  //     </main>
  //   </HydrateClient>
  // );
}
