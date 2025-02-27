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
        <div className="flex flex-col items-center cursor-pointer text-sm font-bold" {...getRootProps()}>
            <input {...getInputProps()} />
            <div className="flex flex-row">
                <p className="">{label}</p>
                <div className="bg-red h-10 w-10"></div>
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
