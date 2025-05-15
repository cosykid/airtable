"use client";

import {
  useReactTable,
  createColumnHelper,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useRef } from "react";

// 🧪 Example schema — replace with your real fields/data
const fields = [
  { id: "f1", name: "Name", type: "text" },
  { id: "f2", name: "Age", type: "number" },
  { id: "f3", name: "Role", type: "text" },
];

function generateFakeData(rowCount: number): any[] {
  const names = ["Langkee", "Kiki", "Momo", "Alice", "Bob", "Charlie", "Eve"];
  const roles = ["Engineer", "Designer", "Manager", "Analyst", "Intern"];

  const rows = Array.from({ length: rowCount }, (_, i) => ({
    id: `${i + 1}`,
    f1: names[i % names.length],
    f2: 20 + (i % 10), // age 20–29
    f3: roles[i % roles.length],
  }));

  return rows;
}

const data = generateFakeData(10000); // or 10_000

export default function AirtableGrid() {
  const columnHelper = createColumnHelper<any>();

  const columns = [
    columnHelper.accessor("id", {
      header: "#",
      cell: (info) => info.getValue(),
      size: 80,
    }),
    ...fields.map((field) =>
      columnHelper.accessor(field.id, {
        header: field.name,
        size: 200,
        cell: (info) => (
          <input
            defaultValue={info.getValue()}
            onBlur={(e) =>
              console.log("Update:", {
                rowId: info.row.original.id,
                fieldId: field.id,
                newValue: e.target.value,
              })
            }
            className="w-full bg-transparent outline-none px-1"
            type={field.type === "number" ? "number" : "text"}
          />
        ),
      })
    ),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    columnResizeMode: "onChange",
  });

  const parentRef = useRef<HTMLDivElement>(null);
  const rowVirtualizer = useVirtualizer({
    count: table.getRowModel().rows.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 40,
    overscan: 5,
  });

  return (
    <div ref={parentRef} className="h-[500px] overflow-auto border">
      <div
        style={{ height: rowVirtualizer.getTotalSize() }}
        className="relative w-max"
      >
        {/* Sticky headers */}
        <div className="sticky top-0 z-10 flex bg-gray-100 border-b">
          {table.getHeaderGroups()[0]?.headers.map((header) => (
            <div
              key={header.id}
              style={{ width: header.getSize() }}
              className="px-2 py-1 border-r font-medium"
            >
              {flexRender(header.column.columnDef.header, header.getContext())}
            </div>
          ))}
        </div>

        {/* Virtualised rows */}
        {rowVirtualizer.getVirtualItems().map((vRow) => {
          const row = table.getRowModel().rows[vRow.index];
          if (!row) return null;
          return (
            <div
              key={row.id}
              className="flex border-b"
              style={{
                position: "absolute",
                transform: `translateY(${vRow.start}px)`,
                // ❌ REMOVE top: 0
                height: `${vRow.size}px`,
                width: "100%",
                zIndex: 0, // optional: ensure rows are under headers
              }}
            >
              {row.getVisibleCells().map((cell) => (
                <div
                  key={cell.id}
                  style={{ width: cell.column.getSize() }}
                  className="px-2 py-1 border-r"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </div>
              ))}
            </div>
          );
        })}

      </div>
    </div>
  );
}
