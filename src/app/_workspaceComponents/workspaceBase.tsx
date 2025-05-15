"use client";

import { useEffect, useState } from "react";

export default function WorkspaceBase({
  title,
  lastOpened,
}: {
  title: string;
  lastOpened: string;
}) {
  const shortenedTitle = title.length >= 2 ? title.slice(0, 2) : title;

  // Safe bg colors with good contrast
  const bgColors = [
    "bg-blue-500", "bg-green-600", "bg-amber-500", "bg-yellow-500",
    "bg-teal-600", "bg-indigo-500", "bg-orange-500",
  ];

  const [randomColor, setRandomColor] = useState("bg-blue-500");

  useEffect(() => {
    const color = bgColors[Math.floor(Math.random() * bgColors.length)] ?? "bg-blue-500";
    setRandomColor(color);
  }, []);

  return (
    <div className="border border-gray-200 rounded-lg p-5 flex items-center hover:bg-gray-50">
      <div className={`${randomColor} text-white w-12 h-12 rounded flex items-center justify-center mr-3`}>
        <span className="font-medium text-lg">{shortenedTitle}</span>
      </div>
      <div>
        <h3 className="font-medium text-sm">{title}</h3>
        <p className="text-xs text-gray-500">Base opened {lastOpened}</p>
      </div>
    </div>
  );
}
