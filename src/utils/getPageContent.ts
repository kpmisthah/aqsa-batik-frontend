/**
 * Server-side counterpart to useHomeContent() — for pages that are (or
 * should be) Server Components, fetching admin-editable section content
 * client-side would force the whole page to ship as client JS for no
 * reason. This fetches the same /api/home-content/:key endpoint at
 * render/build time instead, with ISR revalidation.
 */
export async function getPageContent<T>(sectionKey: string, fallback: T): Promise<T> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:5000/api";
    const url = `${apiUrl.replace('localhost', '127.0.0.1')}/home-content/${sectionKey}`;
    const res = await fetch(url, { next: { revalidate: 60 } });
    if (!res.ok) return fallback;
    const section = await res.json();
    if (section && section.data !== undefined && section.data !== null) {
      return section.data as T;
    }
    return fallback;
  } catch (error) {
    console.error(`Failed to fetch page content section "${sectionKey}"`, error);
    return fallback;
  }
}
