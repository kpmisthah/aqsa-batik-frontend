"use client";
import React, { useRef } from "react";
import Cropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";
import { X } from "lucide-react";

interface ImageCropperModalProps {
  imageFile: File | null;
  onClose: () => void;
  onCropSave: (croppedFile: File) => void;
}

export default function ImageCropperModal({ imageFile, onClose, onCropSave }: ImageCropperModalProps) {
  const cropperRef = useRef<ReactCropperElement>(null);

  if (!imageFile) return null;

  const imageUrl = URL.createObjectURL(imageFile);

  const handleSave = () => {
    const cropper = cropperRef.current?.cropper;
    if (!cropper) return;

    const canvas = cropper.getCroppedCanvas({
      width: 800, // standard width for product
      height: 1000, // 4:5 ratio
    });

    if (!canvas) {
      alert("Please wait for the image to fully load before cropping.");
      return;
    }

    canvas.toBlob((blob: Blob | null) => {
      if (blob) {
        const newFile = new File([blob], imageFile.name, { type: "image/jpeg" });
        onCropSave(newFile);
      }
    }, "image/jpeg", 0.9);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        <div className="p-5 border-b border-[#5A2A1F]/10 flex items-center justify-between bg-[#F5F1EC]">
          <div>
            <h3 className="font-black text-xl text-[#5A2A1F]">Crop Product Image</h3>
            <p className="text-xs font-bold text-[#5A2A1F]/50 uppercase tracking-widest mt-1">4:5 Aspect Ratio (Portrait)</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white rounded-full transition-colors">
            <X size={20} className="text-[#5A2A1F]" />
          </button>
        </div>

        <div className="p-6 bg-gray-50 flex-1 overflow-auto flex justify-center">
          <Cropper
            src={imageUrl}
            style={{ height: 400, width: "100%" }}
            initialAspectRatio={4 / 5}
            aspectRatio={4 / 5}
            guides={true}
            viewMode={1}
            dragMode="move"
            background={false}
            ref={cropperRef}
            className="rounded-xl overflow-hidden shadow-inner border border-[#5A2A1F]/10"
          />
        </div>

        <div className="p-5 border-t border-[#5A2A1F]/10 flex justify-end gap-3 bg-white">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl font-bold text-[#5A2A1F] bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2.5 rounded-xl font-bold text-[#5A2A1F] bg-[#FFD700] hover:bg-[#F4C430] transition-colors shadow-sm"
          >
            Apply Crop & Add
          </button>
        </div>
      </div>
    </div>
  );
}
