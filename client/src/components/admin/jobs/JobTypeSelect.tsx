"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface JobTypeSelectProps {
  value: string;
  onChange: () => void;
}

export default function JobTypeSelect({
  onChange,
  value,
}: JobTypeSelectProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Job Type" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="part-time">Part Time</SelectItem>
        <SelectItem value="internship">InternShip</SelectItem>
        <SelectItem value="full-time">FullTime</SelectItem>
      </SelectContent>
    </Select>
  );
}
