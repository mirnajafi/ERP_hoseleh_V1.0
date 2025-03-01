"use client";

import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

interface FileUploaderProps {
  onFileUpload: (files: File[]) => void;
  accept?: string;
  multiple?: boolean; // امکان انتخاب چندین فایل
  label?: string;
}

const FileUploader: React.FC<FileUploaderProps> = ({ 
  onFileUpload, 
  accept = "*", 
  multiple = true, 
  label = "فایل خود را آپلود کنید"
}) => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const onDrop = (acceptedFiles: File[]) => {
    setUploadedFiles(acceptedFiles);
    onFileUpload(acceptedFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept,
    multiple,
  });

  return (
    <div className="flex flex-col items-center p-4 border-2 border-dashed rounded-lg cursor-pointer" {...getRootProps()}>
      <input {...getInputProps()} />
      <p className="text-gray-500">{label}</p>

      {/* نمایش نام فایل‌های آپلود شده */}
      {uploadedFiles.length > 0 && (
        <ul className="mt-2 text-sm text-gray-700">
          {uploadedFiles.map((file, index) => (
            <li key={index} className="mt-1">
              {file.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FileUploader;
