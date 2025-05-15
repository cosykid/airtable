import { ChevronDown } from 'lucide-react';

export default function SubToolbar() {
  return (
    <div className="flex items-center gap-3 px-4 h-9 border-b bg-white">
      <button className="flex items-center gap-1 font-medium">
        Table 1 <ChevronDown size={14} />
      </button>
      <button className="text-gray-600 hover:text-black text-xs">+ Add or import</button>
    </div>
  );
}
