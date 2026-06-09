import { useState, useEffect } from 'react';

export function useBanner(page: string, fallbackUrl: string) {
  const [bannerUrl, setBannerUrl] = useState<string>(fallbackUrl);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
        const res = await fetch(`${API_BASE}/banners/${page}`, { cache: 'no-store' });
        if (res.ok) {
          const data = await res.json();
          if (data && data.imageUrl) {
            setBannerUrl(data.imageUrl);
          }
        }
      } catch (err) {
        console.error(`Failed to fetch banner for ${page}`, err);
      }
    };

    fetchBanner();
  }, [page]);

  return bannerUrl;
}
