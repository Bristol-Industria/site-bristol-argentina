export interface WPRendered {
  rendered: string;
  protected?: boolean;
}

export interface WPImage {
  id: number;
  source_url: string;
  alt_text: string;
  media_details: {
    width: number;
    height: number;
    sizes: Record<string, { source_url: string; width: number; height: number }>;
  };
}

export interface WPPage {
  id: number;
  slug: string;
  status: string;
  title: WPRendered;
  content: WPRendered;
  excerpt: WPRendered;
  featured_media: number;
  parent: number;
  menu_order: number;
  _embedded?: {
    'wp:featuredmedia'?: WPImage[];
    'wp:term'?: WPTerm[][];
  };
  yoast_head_json?: WPYoast;
}

export interface WPPost {
  id: number;
  slug: string;
  date: string;
  status: string;
  title: WPRendered;
  content: WPRendered;
  excerpt: WPRendered;
  featured_media: number;
  categories: number[];
  tags: number[];
  _embedded?: {
    'wp:featuredmedia'?: WPImage[];
    'wp:term'?: WPTerm[][];
    author?: WPAuthor[];
  };
  yoast_head_json?: WPYoast;
}

export interface WPTerm {
  id: number;
  name: string;
  slug: string;
  taxonomy: string;
}

export interface WPAuthor {
  id: number;
  name: string;
  avatar_urls: Record<string, string>;
}

export interface WPMenuItem {
  id: number;
  title: { rendered: string };
  url: string;
  parent: number;
  menu_order: number;
  object: string;
  object_slug: string;
  type: string;
}

export interface WPYoast {
  title?: string;
  description?: string;
  og_title?: string;
  og_description?: string;
  og_image?: { url: string }[];
}

export interface WPSlide {
  id: string;
  title: string;
  imageUrl: string;
  subtitle?: string;
  buttonText?: string;
  buttonUrl?: string;
}
