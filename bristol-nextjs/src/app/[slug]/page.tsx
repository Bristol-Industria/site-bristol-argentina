import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getAllPageSlugs, getPageBySlug, getImageUrl } from '@/lib/wordpress';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const slugs = await getAllPageSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = await getPageBySlug(params.slug);
  if (!page) return {};
  const yoast = page.yoast_head_json;
  return {
    title: yoast?.title ?? page.title.rendered,
    description: yoast?.description,
    openGraph: {
      title: yoast?.og_title ?? page.title.rendered,
      description: yoast?.og_description,
      images: yoast?.og_image?.map((i) => i.url),
    },
  };
}

export default async function WPPage({ params }: Props) {
  const page = await getPageBySlug(params.slug);
  if (!page) notFound();

  const heroImage = getImageUrl(page, 'large');

  return (
    <article>
      {/* Page hero */}
      <div className="relative bg-brand-dark h-52 md:h-72 flex items-end">
        {heroImage && (
          <Image
            src={heroImage}
            alt={page.title.rendered}
            fill
            className="object-cover opacity-40"
            sizes="100vw"
            priority
          />
        )}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
          <h1
            className="text-3xl md:text-4xl font-bold text-white"
            dangerouslySetInnerHTML={{ __html: page.title.rendered }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div
          className="wp-content"
          dangerouslySetInnerHTML={{ __html: page.content.rendered }}
        />
      </div>
    </article>
  );
}
