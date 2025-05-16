// app/_workspaceComponents/WorkspaceUI.tsx
"use client";

import { useState } from "react";
import { api } from "~/trpc/react";
import { useRouter } from "next/navigation";
import TopNavbar from "~/app/_workspaceComponents/topNavbar";
import Sidebar from "~/app/_workspaceComponents/sidebar";
import MainContent from "~/app/_workspaceComponents/mainContent";
import RightPanel from "~/app/_workspaceComponents/rightPanel";

export default function WorkspaceUI({
  baseList,
}: {
  baseList: [string, string, string][];
}) {
  const [isHomeOpen, setIsHomeOpen] = useState(true);
  const [isWorkspacesOpen, setIsWorkspacesOpen] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleStart = () => {
    setIsModalOpen(false);
    // your logic for “start from scratch” goes here
  };

  const router = useRouter();
  const utils = api.useUtils();
  const createBase = api.base.create.useMutation({
    onSuccess: (newBase) => {
      utils.base.getAll.setData(undefined, (prev) =>
        prev ? [newBase, ...prev] : [newBase]
      );
      router.push(`/${newBase.id}`);
    },
  });

  return (
    <div className="h-screen text-gray-800 flex flex-col">
      <TopNavbar
        setIsSidebarOpen={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}
        showDropdown={showDropdown}
        setShowDropdown={setShowDropdown}
      />

      <div className="flex flex-1">
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          isHomeOpen={isHomeOpen}
          setIsHomeOpen={setIsHomeOpen}
          isWorkspacesOpen={isWorkspacesOpen}
          setIsWorkspacesOpen={setIsWorkspacesOpen}
          createBase={createBase}
        />

        <MainContent baseList={baseList} />

        <RightPanel />
      </div>
    </div>
  );
}
