import type { WPPage, WPPost, WPTerm } from '@/types/wordpress';

const BASE_URL = process.env.NEXT_PUBLIC_WP_API_URL ?? 'https://bristolbr.com.ar';
const API = `${BASE_URL}/wp-json/wp/v2`;

const EMBED = '_embed=wp:featuredmedia,wp:term,author';

async function fetchAPI<T>(path: string, revalidate = 60): Promise<T> {
  const res = await fetch(`${API}${path}`, {
    next: { revalidate },
    headers: { Accept: 'application/json' },
  });
  if (!res.ok) throw new Error(`WP API error ${res.status}: ${path}`);
  return res.json() as Promise<T>;
}

// ── Pages ──────────────────────────────────────────────────────────────────

export async function getAllPages(): Promise<WPPage[]> {
  return fetchAPI<WPPage[]>(`/pages?per_page=100&${EMBED}`, 3600);
}

export async function getPageBySlug(slug: string): Promise<WPPage | null> {
  const pages = await fetchAPI<WPPage[]>(`/pages?slug=${slug}&${EMBED}`, 60);
  return pages[0] ?? null;
}

export async function getHomePage(): Promise<WPPage | null> {
  // WordPress stores the front page ID in the options; fall back to slug 'home'
  const pages = await fetchAPI<WPPage[]>(`/pages?slug=home&${EMBED}`, 60);
  return pages[0] ?? null;
}

export async function getAllPageSlugs(): Promise<string[]> {
  const pages = await fetchAPI<Pick<WPPage, 'slug'>[]>('/pages?per_page=100&_fields=slug', 3600);
  return pages.map((p) => p.slug).filter((s) => s !== 'home');
}

// ── Posts ──────────────────────────────────────────────────────────────────

export async function getPosts(page = 1, perPage = 10): Promise<WPPost[]> {
  return fetchAPI<WPPost[]>(`/posts?page=${page}&per_page=${perPage}&${EMBED}`, 60);
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  const posts = await fetchAPI<WPPost[]>(`/posts?slug=${slug}&${EMBED}`, 60);
  return posts[0] ?? null;
}

export async function getAllPostSlugs(): Promise<string[]> {
  const posts = await fetchAPI<Pick<WPPost, 'slug'>[]>('/posts?per_page=100&_fields=slug', 3600);
  return posts.map((p) => p.slug);
}

export async function getPostsByCategory(categorySlug: string, page = 1): Promise<WPPost[]> {
  const cats = await fetchAPI<WPTerm[]>(`/categories?slug=${categorySlug}`, 3600);
  if (!cats[0]) return [];
  return fetchAPI<WPPost[]>(
    `/posts?categories=${cats[0].id}&page=${page}&per_page=10&${EMBED}`,
    60,
  );
}

// ── Categories ─────────────────────────────────────────────────────────────

export async function getCategories(): Promise<WPTerm[]> {
  return fetchAPI<WPTerm[]>('/categories?per_page=100', 3600);
}

// ── Media ──────────────────────────────────────────────────────────────────

export function getImageUrl(post: WPPage | WPPost, size = 'full'): string | null {
  const media = post._embedded?.['wp:featuredmedia']?.[0];
  if (!media) return null;
  return media.media_details?.sizes?.[size]?.source_url ?? media.source_url;
}

// ── Menu ───────────────────────────────────────────────────────────────────

export interface NavItem {
  id: number;
  title: string;
  url: string;
  slug: string;
  children: NavItem[];
}

export async function getNavMenu(menuId = 2): Promise<NavItem[]> {
  try {
    const items = await fetchAPI<
      { id: number; title: { rendered: string }; url: string; parent: number; menu_order: number; object_slug: string }[]
    >(`/menu-items?menus=${menuId}&per_page=100`, 3600);

    const map = new Map<number, NavItem>();
    const roots: NavItem[] = [];

    items
      .sort((a, b) => a.menu_order - b.menu_order)
      .forEach((item) => {
        const node: NavItem = {
          id: item.id,
          title: item.title.rendered,
          url: item.url.replace(BASE_URL, ''),
          slug: item.object_slug,
          children: [],
        };
        map.set(item.id, node);
        if (item.parent === 0) {
          roots.push(node);
        } else {
          map.get(item.parent)?.children.push(node);
        }
      });

    return roots;
  } catch {
    return defaultMenu;
  }
}

const defaultMenu: NavItem[] = [
  { id: 1, title: 'Página Inicial', url: '/', slug: 'home', children: [] },
  { id: 2, title: 'Sobre', url: '/sobre', slug: 'sobre', children: [] },
  { id: 3, title: 'Ahoyadoras Hidráulicas', url: '/ahoyadoras', slug: 'ahoyadoras', children: [] },
  { id: 4, title: 'Complementos para Motosierras', url: '/complementos-para-motosierras', slug: 'complementos-para-motosierras', children: [] },
  { id: 5, title: 'Contacto', url: '/contacto', slug: 'contacto', children: [] },
];
