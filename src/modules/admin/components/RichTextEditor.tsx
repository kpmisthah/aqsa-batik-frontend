"use client";

import React, { useEffect, useRef, useState } from "react";
import "quill/dist/quill.snow.css";

export default function RichTextEditor({ value, onChange, placeholder }: { value: string, onChange: (value: string) => void, placeholder?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const quillInstance = useRef<any>(null);
  const isTyping = useRef<boolean>(false);
  const [loading, setLoading] = useState(true);
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const [hasActiveImage, setHasActiveImage] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    
    let isMounted = true;
    (async () => {
      // Dynamically load Quill and the image resize module
      const { default: Quill } = await import("quill");
      (window as any).Quill = Quill;
      // @ts-ignore
      const { default: BlotFormatter } = await import("quill-blot-formatter");
      
      try {
        Quill.register("modules/blotFormatter", BlotFormatter);
        
        // Custom Image Blot to preserve inline styles applied by blotFormatter
        const BaseImageFormat = Quill.import('formats/image');
        class ImageFormat extends (BaseImageFormat as any) {
          static formats(domNode: any) {
            return {
              style: domNode.getAttribute('style') || '',
              class: domNode.getAttribute('class') || '',
              width: domNode.getAttribute('width') || '',
              height: domNode.getAttribute('height') || ''
            };
          }
          format(name: string, value: any) {
            if (['style', 'class', 'width', 'height'].includes(name)) {
              if (value) {
                this.domNode.setAttribute(name, value);
              } else {
                this.domNode.removeAttribute(name);
              }
            } else {
              super.format(name, value);
            }
          }
        }
        Quill.register(ImageFormat, true);
      } catch (e) {
        // Module might already be registered in development hot-reloads
      }

      if (!isMounted) return;

      const editor = document.createElement("div");
      containerRef.current!.appendChild(editor);

      const imageHandler = () => {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();

        input.onchange = async () => {
          const file = input.files ? input.files[0] : null;
          if (file) {
            setIsUploadingImage(true);
            const formData = new FormData();
            formData.append('image', file);
            
            try {
              const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
              const res = await fetch(`${API_BASE}/upload`, {
                method: 'POST',
                body: formData,
              });
              
              if (!res.ok) throw new Error('Upload failed');
              const data = await res.json();
              
              if (quillInstance.current) {
                 const range = quillInstance.current.getSelection(true) || { index: 0 };
                 quillInstance.current.insertEmbed(range.index, 'image', data.imageUrl);
                 quillInstance.current.setSelection(range.index + 1);
              }
            } catch (error) {
              console.error("Upload error", error);
              alert('Failed to upload image securely.');
            } finally {
              setIsUploadingImage(false);
            }
          }
        };
      };

      const quill = new Quill(editor, {
        theme: "snow",
        placeholder: placeholder || "Write your content here...",
        modules: {
          toolbar: {
            container: [
              [{ header: [1, 2, 3, 4, 5, 6, false] }],
              [{ align: [] }],
              ["bold", "italic", "underline", "strike", "blockquote"],
              [{ list: "ordered" }, { list: "bullet" }],
              ["link", "image", "video"],
              [{ color: [] }, { background: [] }],
              ["clean"],
            ],
            handlers: {
              image: imageHandler
            }
          },
          blotFormatter: {}
        }
      });

      // Set initial content
      quill.root.innerHTML = value || "";

      quill.on("text-change", () => {
        isTyping.current = true;
        onChange(quill.root.innerHTML);
        setTimeout(() => isTyping.current = false, 100);
      });

      // Observe raw DOM changes to capture inline styles applied by blotFormatter
      const observer = new MutationObserver(() => {
        isTyping.current = true;
        onChange(quill.root.innerHTML);
        setTimeout(() => isTyping.current = false, 100);
      });
      observer.observe(quill.root, { attributes: true, subtree: true });

      // Start an interval to monitor if the image format overlay is active
      const interval = setInterval(() => {
        if (quillInstance.current) {
          const formatterModule = quillInstance.current.getModule("blotFormatter");
          if (formatterModule && formatterModule.currentSpec) {
             setHasActiveImage(true);
          } else {
             setHasActiveImage(false);
          }
        }
      }, 300);

      quillInstance.current = quill;
      setLoading(false);

      return () => {
        clearInterval(interval);
        observer.disconnect();
      };
    })();

    return () => {
      isMounted = false;
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []); // Only run once on mount

  useEffect(() => {
    // Only update if external value changes (not while user is actively typing)
    if (quillInstance.current && !isTyping.current) {
      if (quillInstance.current.root.innerHTML !== (value || "")) {
        quillInstance.current.root.innerHTML = value || "";
      }
    }
  }, [value]);

  const handleDeleteActiveImage = () => {
    if (quillInstance.current) {
       const quill = quillInstance.current;
       const formatterModule = quill.getModule("blotFormatter");
       if (formatterModule && formatterModule.currentSpec) {
          const img = formatterModule.currentSpec.getTargetElement();
          if (img) {
             const _Quill = (window as any).Quill;
             const blot = _Quill.find(img);
             if (blot) {
                const index = quill.getIndex(blot);
                quill.deleteText(index, 1);
                formatterModule.hide();
                setHasActiveImage(false);
             }
          }
       }
    }
  };

  return (
    <div className="rich-text-editor-container border border-primary/20 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-accent focus-within:border-accent relative bg-white">
      {(loading || isUploadingImage) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm z-20 p-10 text-primary font-bold text-sm animate-pulse">
          {isUploadingImage ? (
            <>
              <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin mb-3" />
              Uploading Image...
            </>
          ) : (
            "Loading Rich Text Editor..."
          )}
        </div>
      )}
      
      {hasActiveImage && (
        <div className="absolute top-4 right-4 z-10 flex gap-2">
          <button
            onClick={handleDeleteActiveImage}
            type="button"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white text-xs font-black uppercase tracking-widest rounded-lg shadow-lg active:scale-95 transition-all"
          >
            Trash Image
          </button>
        </div>
      )}

      <div 
        ref={containerRef} 
        className="text-slate-800 [&_.ql-editor]:text-slate-800 [&_.ql-editor]:min-h-[300px] [&_.ql-container]:border-x-0 [&_.ql-container]:border-b-0 [&_.ql-container]:border-t-primary/10 [&_.ql-toolbar]:border-0 [&_.ql-toolbar]:bg-cream/30 z-0"
      />
    </div>
  );
}
