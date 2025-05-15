import {
  Grid as GridIcon,
  Filter,
  Group,
  SortAsc,
  Eye,
  Share2,
} from 'lucide-react';

export default function ViewFilterToolbar() {
  return (
    <div className="flex items-center gap-4 px-4 h-9 border-b bg-white text-gray-600">
      <button className="font-medium">Views</button>
      <button className="flex items-center gap-1"><GridIcon size={14}/> Grid view</button>
      <button className="flex items-center gap-1"><Filter size={14}/> Filter</button>
      <button className="flex items-center gap-1"><Group size={14}/> Group</button>
      <button className="flex items-center gap-1"><SortAsc size={14}/> Sort</button>
      <button className="flex items-center gap-1"><Eye size={14}/> Hide fields</button>
      <button className="flex items-center gap-1"><Share2 size={14}/> Share and sync</button>
    </div>
  );
}
