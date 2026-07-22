"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { SearchBar } from "@/components/menu/search-bar";

export function HomeMenuSearch({ className }: { className?: string }) {
  const [value, setValue] = useState("");
  const router = useRouter();

  return (
    <SearchBar
      className={className}
      value={value}
      onChange={setValue}
      onClear={() => setValue("")}
      onSubmit={(query) => {
        router.push(query ? `/menu?query=${encodeURIComponent(query)}` : "/menu");
      }}
    />
  );
}
