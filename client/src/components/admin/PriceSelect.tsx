"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface PriceSelectProps {
  value: string;
  onChange: () => void;
}

export default function PriceSelect({ value, onChange }: PriceSelectProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Price" />
      </SelectTrigger>
      <SelectContent className="divide-y-2 divide-black">
        <SelectItem value="free">Free</SelectItem>
        <SelectItem value="paid">Paid</SelectItem>
      </SelectContent>
    </Select>
  );
}
