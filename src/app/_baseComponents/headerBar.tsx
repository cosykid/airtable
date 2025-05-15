export default function HeaderBar() {
  return (
    <header className="flex items-center gap-4 px-4 h-10 bg-[#27c1ff] text-white">
      <div className="flex items-center gap-2 font-semibold">
        <span className="inline-block w-4 h-4 bg-gray-800 rounded-sm" />
        Untitled Base
      </div>
      <nav className="flex items-center gap-6 font-medium">
        <button className="opacity-90 hover:opacity-100">Data</button>
        <button className="opacity-70 hover:opacity-100">Automations</button>
        <button className="opacity-70 hover:opacity-100">Interfaces</button>
        <button className="opacity-70 hover:opacity-100">Forms</button>
      </nav>
      <div className="ml-auto flex items-center gap-3 text-xs font-medium">
        <button className="hover:underline">Help</button>
        <button className="rounded bg-white/20 px-2 py-1">Upgrade</button>
        <button className="h-6 w-6 rounded-full bg-yellow-400 text-[10px] font-bold">L</button>
      </div>
    </header>
  );
}
