"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CategorySelectProps {
  value: string;
  onChange: () => void;
}

export default function CategorySelect({
  onChange,
  value,
}: CategorySelectProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Category" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="web">Web</SelectItem>
        <SelectItem value="app">App</SelectItem>
        <SelectItem value="game">Game</SelectItem>
      </SelectContent>
    </Select>
  );
}
