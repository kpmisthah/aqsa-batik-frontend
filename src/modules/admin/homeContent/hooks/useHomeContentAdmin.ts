import { useState, useEffect, useCallback } from "react";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export function useHomeContentAdmin() {
  const [sections, setSections] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  const fetchAll = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/home-content`, { credentials: "include", cache: "no-store" });
      const data = await res.json();
      const map: Record<string, any> = {};
      if (Array.isArray(data)) {
        data.forEach((section: any) => {
          map[section.sectionKey] = section.data;
        });
      }
      setSections(map);
    } catch (error) {
      console.error("Failed to fetch home content sections:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  const updateSection = async (key: string, data: any) => {
    try {
      setIsSaving(true);
      const res = await fetch(`${API_BASE}/home-content/${key}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ data }),
      });
      if (!res.ok) throw new Error("Failed to save section");
      const saved = await res.json();
      setSections((prev) => ({ ...prev, [key]: saved.data }));
      return saved;
    } finally {
      setIsSaving(false);
    }
  };

  return { sections, loading, isSaving, fetchAll, updateSection };
}
