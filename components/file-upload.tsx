"use client";

import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Upload } from "lucide-react";

interface FileUploadComponentProps {
  files: File[];
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
}

export function FileUploadComponent({ files, setFiles }: FileUploadComponentProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files || []);
    setFiles(selectedFiles);
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    inputRef.current?.click();
  };

  return (
    <div className="flex flex-col items-center space-y-4 w-full">
       {files.length > 0 && (
        <div className="w-full">
          <p className="text-sm text-gray-500 mb-2">Selected files:</p>
          <div className={`grid grid-cols-5 gap-2`}>
            {files.map((file, index) => (
              <div key={index} className="text-sm text-gray-500 truncate">
                {file.type.startsWith("image/") ? (
                  <div className="relative aspect-square">
                    <img
                      src={URL.createObjectURL(file)}
                      alt={file.name}
                      className="object-cover w-full h-full rounded"
                    />
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                    <span>{file.name}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      <Input
        type="file"
        ref={inputRef}
        onChange={handleFileChange}
        className="hidden"
        id="file-upload"
        multiple
      />
      <Button onClick={handleButtonClick} variant={'secondary'} className="w-full">
        <Upload className="w-4 h-4 mr-2" />
        Upload images
      </Button>
    </div>
  );
}
