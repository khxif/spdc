"use client";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface WorkModeSelectProps {
  value: string;
  onChange: () => void;
}

export default function WorkModeSelect({
  onChange,
  value,
}: WorkModeSelectProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Job Type" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="on-site">On site</SelectItem>
        <SelectItem value="remote">Remote</SelectItem>
        <SelectItem value="hybrid">Hybrid</SelectItem>
      </SelectContent>
    </Select>
  );
}
