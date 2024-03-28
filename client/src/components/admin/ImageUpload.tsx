"use client";

import { CldUploadButton } from "next-cloudinary";
import Image from "next/image";

interface ImageUploadProps {
  value: string;
  onChange: (src: string) => void;
  disabled?: boolean;
  className?: string
}

export default function ImageUpload({
  onChange,
  value,
  disabled,
  className
}: ImageUploadProps) {
  return (
    <div className="mx-auto w-full flex items-center justify-center">
      <CldUploadButton
        options={{
          maxFiles: 1,
        }}
        uploadPreset="cxq9jtid"
        onSuccess={(results: any) => onChange(results.info.secure_url)}
        
      >
        <div className="p-3 rounded-lg border-2 border-gray-500 border-dashed size-40">
          <Image
            src={value || "/placeholder.svg"}
            alt="placeholder"
            height={300}
            priority
            width={300}
            className="rounded-lg object-cover size-full"
          />
        </div>
      </CldUploadButton>
    </div>
  );
}
