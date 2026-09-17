import { useState, useEffect, useCallback } from "react";

export interface AdminProduct {
  id: string;
  name: string;
  category: string;
  subCategory?: string;
  images: string[];
  colours: string[];
  fabricDetails: string;
  quantity: number;
  fullPrice: number;
  discountPrice: number;
  isBestSeller: boolean;
  isWholesale: boolean;
  isBlocked: boolean;
  seoTitle?: string;
  metaDescription?: string;
  description?: string;
}

const API_BASE = process.env.NEXT_PUBLIC_API_URL

export function useProducts() {
  const [productList, setProductList] = useState<AdminProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [pagination, setPagination] = useState({ page: 1, limit: 10, totalPages: 1, total: 0 });
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<AdminProduct | null>(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(`${API_BASE}/products/categories`);
        const data = await res.json();
        setCategories(data.categories || []);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const fetchProducts = useCallback(async (
    page: number = 1,
    limit: number = 10,
    category: string = selectedCategory,
    search: string = searchTerm
  ) => {
    try {
      setLoading(true);
      let url = `${API_BASE}/products?page=${page}&limit=${limit}&admin=true`;
      if (category && category !== "All Categories") {
        url += `&category=${encodeURIComponent(category)}`;
      }
      if (search) {
        url += `&search=${encodeURIComponent(search)}`;
      }
      const res = await fetch(url);
      const data = await res.json();
      setProductList(data.data || []);
      setPagination({
        page: data.page,
        limit: data.limit,
        totalPages: data.totalPages,
        total: data.total
      });
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false);
    }
  }, [selectedCategory, searchTerm]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchProducts(1, pagination.limit, selectedCategory, searchTerm);
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [selectedCategory, searchTerm, pagination.limit]);

  const uploadImages = async (files: FileList): Promise<string[]> => {
    const formData = new FormData();
    Array.from(files).forEach((file) => formData.append("images", file));
    const res = await fetch(`${API_BASE}/upload/multiple`, { method: "POST", body: formData });
    const data = await res.json();
    return data.imageUrls || [];
  };

  const createProduct = async (formData: FormData) => {
    try {
      setIsSaving(true);
      // Upload images if files are provided
      const imageFiles = formData.getAll("imageFiles") as File[];
      let imageUrls: string[] = [];
      const validFiles = imageFiles.filter((f) => f.size > 0);
      if (validFiles.length > 0) {
        const uploadForm = new FormData();
        validFiles.forEach((f) => uploadForm.append("images", f));
        const uploadRes = await fetch(`${API_BASE}/upload/multiple`, { method: "POST", body: uploadForm });
        const uploadData = await uploadRes.json();
        imageUrls = uploadData.imageUrls || [];
      }

      // Parse colours from comma-separated string
      const coloursRaw = (formData.get("colours") as string) || "";
      const colours = coloursRaw.split(",").map((c) => c.trim()).filter(Boolean);

      const body = {
        name: formData.get("name") as string,
        category: formData.get("category") as string,
        subCategory: formData.get("subCategory") as string,
        images: imageUrls,
        colours,
        fabricDetails: formData.get("fabricDetails") as string,
        quantity: Number(formData.get("quantity")),
        fullPrice: Number(formData.get("fullPrice")),
        discountPrice: Number(formData.get("discountPrice")),
        isBestSeller: formData.get("isBestSeller") === "true",
        isWholesale: formData.get("isWholesale") === "true",
        seoTitle: formData.get("seoTitle") as string,
        metaDescription: formData.get("metaDescription") as string,
        description: formData.get("description") as string,
      };

      const res = await fetch(`${API_BASE}/products`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error("Failed to create product");
      await fetchProducts(1, pagination.limit); // fetch page 1 after creating
    } catch (error) {
      console.error("Failed to create product:", error);
    } finally {
      setIsSaving(false);
    }
  };

  const updateProduct = async (id: string, formData: FormData) => {
    try {
      setIsSaving(true);
      // Upload new images if provided
      const imageFiles = formData.getAll("imageFiles") as File[];
      const validFiles = imageFiles.filter((f) => f.size > 0);
      let newImageUrls: string[] = [];
      if (validFiles.length > 0) {
        const uploadForm = new FormData();
        validFiles.forEach((f) => uploadForm.append("images", f));
        const uploadRes = await fetch(`${API_BASE}/upload/multiple`, { method: "POST", body: uploadForm });
        const uploadData = await uploadRes.json();
        newImageUrls = uploadData.imageUrls || [];
      }

      const imagesOrder = formData.get("imagesOrder") as string;
      let finalImages: string[] = [];
      if (imagesOrder) {
        const parsedOrder = JSON.parse(imagesOrder);
        let newIdx = 0;
        finalImages = parsedOrder.map((item: string) => {
            if (item.startsWith("existing:")) return item.substring(9);
            if (item.startsWith("new:")) return newImageUrls[newIdx++];
            return "";
        }).filter(Boolean);
      } else {
        const existingImages = formData.getAll("existingImages") as string[];
        finalImages = [...existingImages, ...newImageUrls];
      }

      const coloursRaw = (formData.get("colours") as string) || "";
      const colours = coloursRaw.split(",").map((c) => c.trim()).filter(Boolean);

      const body: Record<string, any> = {
        name: formData.get("name") as string,
        category: formData.get("category") as string,
        subCategory: formData.get("subCategory") as string,
        colours,
        fabricDetails: formData.get("fabricDetails") as string,
        quantity: Number(formData.get("quantity")),
        fullPrice: Number(formData.get("fullPrice")),
        discountPrice: Number(formData.get("discountPrice")),
        isBestSeller: formData.get("isBestSeller") === "true",
        isWholesale: formData.get("isWholesale") === "true",
        seoTitle: formData.get("seoTitle") as string,
        metaDescription: formData.get("metaDescription") as string,
        description: formData.get("description") as string,
        images: finalImages,
      };

      const res = await fetch(`${API_BASE}/products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error("Failed to update product");
      await fetchProducts(pagination.page, pagination.limit);
    } catch (error) {
      console.error("Failed to update product:", error);
    } finally {
      setIsSaving(false);
    }
  };

  const toggleBlock = async (id: string) => {
    try {
      const res = await fetch(`${API_BASE}/products/${id}/toggle-block`, { method: "PATCH" });
      if (!res.ok) throw new Error("Failed to toggle block");
      await fetchProducts(pagination.page, pagination.limit);
    } catch (error) {
      console.error("Failed to toggle block:", error);
    }
  };

  const deleteProduct = async (id: string) => {
    try {
      const res = await fetch(`${API_BASE}/products/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete product");
      await fetchProducts(pagination.page, pagination.limit);
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
  };

  const bulkUpload = async (csvFile: File, zipFile: File) => {
    try {
      setIsSaving(true);
      // 1. Upload zip
      const zipData = new FormData();
      zipData.append('file', zipFile);
      const zipRes = await fetch(`${API_BASE}/upload/bulk-images`, { method: "POST", body: zipData });
      if (!zipRes.ok) throw new Error("Failed to upload images zip");
      const zipResult = await zipRes.json();
      const uploadedFiles = zipResult.files || [];

      // 2. Parse CSV
      const Papa = (await import('papaparse')).default;
      const csvText = await csvFile.text();

      const parsed = Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        transformHeader: (h: string) => h.trim(),
      });

      const rows = parsed.data;
      const payload: any[] = [];

      const resolveImage = (filename: string, name: string, rowIndex: number) => {
        const match = uploadedFiles.find((f: any) => f.filename === filename.trim());
        if (!match) {
          throw new Error(`Row ${rowIndex}: image "${filename.trim()}" for product "${name}" was not found in the uploaded ZIP. Check the filename matches exactly, or that the file is actually included in the ZIP.`);
        }
        return match.url;
      };

      let rowIndex = 1;
      for (const row of rows as any[]) {
        const name = row['Product SEO Title']?.trim();
        const category = row['Categories']?.trim();
        const fullPrice = row['First Price'];

        // Validation checks
        if (!name) {
           throw new Error(`Row ${rowIndex}: "Product SEO Title" is missing.`);
        }
        if (!category) {
           throw new Error(`Row ${rowIndex}: "Categories" is missing for product "${name}".`);
        }
        if (!fullPrice || isNaN(Number(fullPrice))) {
           throw new Error(`Row ${rowIndex}: "First Price" must be a valid number for product "${name}".`);
        }

        const galleryColumns = ['Model Image', 'Gallery Images 1- Kameez', 'Gallery Images 2- Shalwar', 'Gallery Images 3- Duppatta'];
        const images = galleryColumns
          .map((col) => row[col]?.trim())
          .filter(Boolean)
          .map((filename: string) => resolveImage(filename, name, rowIndex));

        payload.push({
          name,
          category,
          subCategory: row['Product Type']?.trim() || '',
          images,
          colours: row['Colour'] ? row['Colour'].split('|').map((c: string) => c.trim()).filter(Boolean) : [],
          fabricDetails: [row['Fabric'], row['Fabric Quality']].filter(Boolean).join(', '),
          quantity: Number(row['Quantity']) || 0,
          fullPrice: Number(fullPrice) || 0,
          discountPrice: Number(row['Discounted Price']) || Number(fullPrice) || 0,
          isWholesale: row['Wholesale Available']?.trim().toLowerCase() === 'yes',
          seoTitle: name,
          metaDescription: row['Meta Discription'] || '',
          description: row['Product Description'] || '',
          sku: row['SKU Code']?.trim() || '',
          slug: row['Product Slug']?.trim() || '',
          pattern: row['Pattern'] || '',
          fabric: row['Fabric'] || '',
          careInstructions: row['Product Care Instructions'] || '',
          fabricQuality: row['Fabric Quality'] || '',
          kameezLength: row['Kameez Length'] || '',
          shalwarLength: row['Shalwar Length'] || '',
          dupattaLength: row['Dupatta Length'] || '',
          discountPercentage: row['Discount Percentage'] || '',
          stockStatus: row['Stock Status'] || '',
          altText: row['Alt Text'] || '',
          tags: row['Tags'] ? row['Tags'].split(',').map((t: string) => t.trim()).filter(Boolean) : [],
          minWholesaleQuantity: Number(row['Minimum Wholesale Quantity']) || 0,
        });
        rowIndex++;
      }

      // 3. Submit
      const res = await fetch(`${API_BASE}/products/bulk`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to create bulk products");
      await fetchProducts(1, pagination.limit);
      return { success: true, count: payload.length };
    } catch (error: any) {
      console.error("Bulk upload error:", error);
      throw error;
    } finally {
      setIsSaving(false);
    }
  };

  const bulkUpdateInventory = async (updates: { id: string; quantity: number }[]) => {
    try {
      setIsSaving(true);
      const res = await fetch(`${API_BASE}/products/inventory`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ updates }),
      });
      if (!res.ok) throw new Error("Failed to update inventory");
      await fetchProducts(pagination.page, pagination.limit);
      return true;
    } catch (error: any) {
      console.error("Bulk inventory update error:", error);
      throw error;
    } finally {
      setIsSaving(false);
    }
  };

  const openAddModal = () => setIsAddModalOpen(true);

  const closeModals = () => {
    setIsAddModalOpen(false);
    setEditingProduct(null);
  };

  return {
    productList,
    pagination,
    fetchProducts,
    loading,
    isSaving,
    isAddModalOpen,
    editingProduct,
    setEditingProduct,
    createProduct,
    updateProduct,
    toggleBlock,
    deleteProduct,
    bulkUpload,
    bulkUpdateInventory,
    openAddModal,
    closeModals,
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    categories,
  };
}
