"use client";

import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

interface FileUploaderProps {
    onFileUpload: (files: File[]) => void;
    accept?: string;
    multiple?: boolean;
    label?: string;
}

const FileUploader: React.FC<FileUploaderProps> = ({
    onFileUpload,
    accept = "*",
    multiple = true,
    label = 'بارگذاری فایل'
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
        <div className="w-1/6 max-w-[150px] cursor-pointer " {...getRootProps()}>
            <input {...getInputProps()} />
            <div className="flex flex-row justify-between items-center">
                <p className="text-xs font-bold">{label}</p>
                <button className="bg-[#FFF6F7] h-10 w-10 border rounded-lg border-[#FF7101]"><UploaderIcon</button>
            </div>

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
