import type { ElementType } from 'react';
import { Grid as GridIcon } from 'lucide-react';
import {
  Calendar,
  Image as Gallery,
  Kanban,
  Timer,
  List,
  GanttChart,
  FormInput,
} from 'lucide-react';

const CREATE_OPTIONS: [ElementType, string][] = [
  [GridIcon,   'Grid'],
  [Calendar,   'Calendar'],
  [Gallery,    'Gallery'],
  [Kanban,     'Kanban'],
  [Timer,      'Timeline'],
  [List,       'List'],
  [GanttChart, 'Gantt'],
  [FormInput,  'Form'],
];

export default function SidePanel() {
  return (
    <aside className="w-52 border-r flex flex-col">
      <div className="flex flex-col gap-px py-1">
        {['Grid view', 'Grid 2'].map(v => (
          <button
            key={v}
            className={`flex items-center gap-2 px-3 py-1.5 text-sm rounded-r ${
              v === 'Grid view' ? 'bg-gray-100 font-medium' : 'hover:bg-gray-50'
            }`}
          >
            <GridIcon size={14}/> {v}
          </button>
        ))}
      </div>
      <div className="mt-auto border-t py-2">
        <p className="px-3 py-2 text-xs font-semibold text-gray-500">Create…</p>
        <div className="flex flex-col gap-0.5 text-[13px]">
          {CREATE_OPTIONS.map(([Icon, label]) => (
            <button
              key={label}
              className="flex items-center gap-2 px-3 py-1.5 hover:bg-gray-50 rounded-r"
            >
              <Icon size={14} />
              {label}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
