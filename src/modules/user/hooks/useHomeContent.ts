import { useState, useEffect } from 'react';

export function useHomeContent<T>(sectionKey: string, fallback: T): T {
  const [content, setContent] = useState<T>(fallback);

  useEffect(() => {
    let cancelled = false;

    const fetchSection = async () => {
      try {
        const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
        const res = await fetch(`${API_BASE}/home-content/${sectionKey}`, { cache: 'no-store' });
        if (res.ok) {
          const section = await res.json();
          if (!cancelled && section && section.data !== undefined && section.data !== null) {
            setContent(section.data as T);
          }
        }
      } catch (err) {
        console.error(`Failed to fetch home content section "${sectionKey}"`, err);
      }
    };

    fetchSection();
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionKey]);

  return content;
}
