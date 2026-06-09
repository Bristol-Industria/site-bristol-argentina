import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { getAllPostSlugs, getPostBySlug, getImageUrl } from '@/lib/wordpress';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};
  const yoast = post.yoast_head_json;
  return {
    title: yoast?.title ?? post.title.rendered,
    description: yoast?.description,
    openGraph: {
      title: yoast?.og_title ?? post.title.rendered,
      description: yoast?.og_description,
      type: 'article',
      publishedTime: post.date,
      images: yoast?.og_image?.map((i) => i.url),
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  const imageUrl = getImageUrl(post, 'large');
  const date = format(new Date(post.date), "d 'de' MMMM 'de' yyyy", { locale: es });
  const author = post._embedded?.author?.[0];
  const categories = post._embedded?.['wp:term']?.[0] ?? [];

  return (
    <article>
      {/* Hero image */}
      {imageUrl && (
        <div className="relative h-64 md:h-96 bg-brand-dark">
          <Image
            src={imageUrl}
            alt={post.title.rendered}
            fill
            priority
            className="object-cover opacity-80"
            sizes="100vw"
          />
        </div>
      )}

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-brand-orange">Inicio</Link>
          {' / '}
          <Link href="/blog" className="hover:text-brand-orange">Blog</Link>
          {' / '}
          <span className="text-brand-dark" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
        </nav>

        {/* Categories */}
        {categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {categories.map((cat) => (
              <span
                key={cat.id}
                className="text-xs font-medium bg-brand-orange/10 text-brand-orange px-3 py-1 rounded-full"
              >
                {cat.name}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h1
          className="text-3xl md:text-4xl font-bold text-brand-dark leading-tight mb-4"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-10 pb-6 border-b border-brand-gray">
          {author && <span>Por {author.name}</span>}
          <time dateTime={post.date}>{date}</time>
        </div>

        {/* Content */}
        <div
          className="wp-content"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />

        {/* Back */}
        <div className="mt-12 pt-6 border-t border-brand-gray">
          <Link href="/blog" className="text-brand-orange font-medium hover:underline">
            ← Volver al blog
          </Link>
        </div>
      </div>
    </article>
  );
}
