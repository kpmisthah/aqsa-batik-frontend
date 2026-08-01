"use client";

import React, { useState } from 'react';
import { UploadCloud, FileType, CheckCircle2, AlertCircle } from 'lucide-react';
import { useProducts } from "@/modules/admin/products/hooks/useProducts";
import Link from 'next/link';

export default function AdminBulkUpload() {
  const { bulkUpload } = useProducts();
  
  const [csvFile, setCsvFile] = useState<File | null>(null);
  const [zipFile, setZipFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<{ count: number } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!csvFile || !zipFile) return;

    try {
      setIsUploading(true);
      setError(null);
      const res = await bulkUpload(csvFile, zipFile);
      setSuccess(res);
    } catch (err: any) {
      setError(err.message || 'Error occurred during bulk upload');
    } finally {
      setIsUploading(false);
    }
  };

  const handleDownloadTemplate = () => {
    const headers = [
      "name", "category", "subCategory", "images", "colours", 
      "fabricDetails", "quantity", "fullPrice", "discountPrice", 
      "isBestSeller", "isWholesale", "seoTitle", "metaDescription", "description"
    ].join(",");
    const example = [
      "Premium Batik Suit", "Batik Suits", "", "1.jpg|2.jpg", "Red|Blue",
      "Soft cotton", "50", "1999", "1299",
      "true", "false", "", "", "A beautiful suit"
    ].join(",");
    const csvContent = "data:text/csv;charset=utf-8," + headers + "\n" + example;
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "product_bulk_template.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const resetUpload = () => {
    setCsvFile(null);
    setZipFile(null);
    setSuccess(null);
    setError(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-primary/10">
        <div>
          <h1 className="text-2xl font-black font-heading text-primary uppercase">Bulk Data Upload</h1>
          <p className="text-sm text-primary/60 mt-1 font-medium">Create vast catalogs of products simultaneously via CSV mapping.</p>
        </div>
      </div>

      <div className="bg-white rounded-3xl w-full shadow-sm border border-primary/10 flex flex-col relative overflow-hidden">
        <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-8">
          
          {success ? (
            <div className="flex flex-col items-center justify-center py-16 space-y-5">
              <CheckCircle2 size={72} className="text-green-500" />
              <div className="text-center">
                <h3 className="text-2xl font-black text-primary mb-2">System Updated Successfully!</h3>
                <p className="text-primary/70 font-medium text-lg">Safely generated and ingested {success.count} product(s).</p>
              </div>
              <div className="flex gap-4 mt-6">
                <Link href="/aqsha-portal/products" className="px-6 py-3 rounded-xl bg-white border border-primary/20 text-primary font-bold text-sm shadow-sm hover:bg-primary/5 transition-all">
                  Go to Products
                </Link>
                <button type="button" onClick={resetUpload} className="px-6 py-3 rounded-xl bg-primary text-white font-bold text-sm shadow-md hover:bg-primary/90 transition-all">
                  Upload More
                </button>
              </div>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto space-y-8">
              {error && (
                <div className="p-4 bg-red-50 text-red-600 rounded-xl flex items-start gap-3 border border-red-100">
                  <AlertCircle className="shrink-0 mt-0.5" size={18} />
                  <p className="text-sm font-semibold">{error}</p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* CSV File Input */}
                <div className="space-y-3">
                  <label className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-secondary">
                    <FileType size={16} /> Data File (.csv)
                  </label>
                  <div className={`relative flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-2xl transition-colors cursor-pointer ${csvFile ? 'border-accent bg-accent/5' : 'border-primary/20 hover:border-primary/40 bg-cream/30 hover:bg-cream/60'}`}>
                    <input 
                      type="file" 
                      accept=".csv" 
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-50"
                      onChange={(e) => setCsvFile(e.target.files?.[0] || null)}
                      required
                    />
                    <div className="flex flex-col items-center justify-center text-center px-4">
                      {csvFile ? (
                        <>
                          <CheckCircle2 className="w-10 h-10 text-green-500 mb-3" />
                          <span className="text-sm font-bold text-primary truncate max-w-[200px]">{csvFile.name}</span>
                          <span className="text-xs text-primary/50 mt-1">Ready</span>
                        </>
                      ) : (
                        <>
                          <UploadCloud className="w-10 h-10 text-primary/40 mb-3" />
                          <span className="text-sm font-medium text-primary/60">Upload structured grid file</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* ZIP File Input */}
                <div className="space-y-3">
                  <label className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-secondary">
                    <FileType size={16} /> Images File (.zip)
                  </label>
                  <div className={`relative flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-2xl transition-colors cursor-pointer ${zipFile ? 'border-accent bg-accent/5' : 'border-primary/20 hover:border-primary/40 bg-cream/30 hover:bg-cream/60'}`}>
                    <input 
                      type="file" 
                      accept=".zip" 
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-50"
                      onChange={(e) => setZipFile(e.target.files?.[0] || null)}
                      required
                    />
                    <div className="flex flex-col items-center justify-center text-center px-4">
                      {zipFile ? (
                        <>
                          <CheckCircle2 className="w-10 h-10 text-green-500 mb-3" />
                          <span className="text-sm font-bold text-primary truncate max-w-[200px]">{zipFile.name}</span>
                          <span className="text-xs text-primary/50 mt-1">Ready</span>
                        </>
                      ) : (
                        <>
                          <UploadCloud className="w-10 h-10 text-primary/40 mb-3" />
                          <span className="text-sm font-medium text-primary/60">Upload archived assets</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
                <h4 className="text-sm font-black text-primary uppercase tracking-widest mb-3">Upload Rules & Instructions</h4>
                <ul className="text-sm text-primary/80 space-y-3 list-disc list-inside bg-white p-4 rounded-xl border border-primary/5 shadow-sm">
                  <li><strong className="font-bold">Synchronicity:</strong> Ensure both your CSV layout and ZIP assets are uploaded before firing the payload.</li>
                  <li><strong className="font-bold">Image Mapping:</strong> The system automatically extracts Cloudinary URLs. In your CSV's "images" column, simply type the raw filename matching your ZIP (e.g., <code className="bg-cream px-1.5 py-0.5 rounded text-secondary font-bold">front.jpg</code>).</li>
                  <li><strong className="font-bold">Multiple Identifiers:</strong> Bridge multiple images using the vertical pipe <code className="bg-cream px-1.5 py-0.5 rounded font-bold">|</code> (e.g., <code className="bg-cream px-1.5 py-0.5 rounded text-secondary font-bold">1.jpg|2.jpg</code>).</li>
                  <li><strong className="font-bold">Zip Format:</strong> Archives must strictly contain raw visual assets. Nesting is ignored.</li>
                </ul>
                <div className="mt-5 flex justify-end">
                   <button type="button" onClick={handleDownloadTemplate} className="px-5 py-2 bg-cream/50 rounded-lg text-sm font-bold text-secondary border border-primary/5 hover:bg-cream transition-colors shadow-sm">Download Blank CSV Template</button>
                </div>
              </div>

              <div className="pt-6 border-t border-primary/10 flex justify-end">
                <button
                  type="submit"
                  disabled={isUploading || !csvFile || !zipFile}
                  className="px-10 py-4 rounded-xl bg-primary text-white font-black uppercase tracking-wider text-sm shadow-md hover:bg-primary/90 hover:-translate-y-0.5 transition-all active:scale-95 disabled:opacity-50 flex items-center gap-2"
                >
                  {isUploading ? (
                    <>
                      <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin"></div>
                      Processing Engine...
                    </>
                  ) : (
                    'Execute Batch Upload'
                  )}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
