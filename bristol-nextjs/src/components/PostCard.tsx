import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import type { WPPost } from '@/types/wordpress';
import { getImageUrl } from '@/lib/wordpress';

interface PostCardProps {
  post: WPPost;
}

export default function PostCard({ post }: PostCardProps) {
  const imageUrl = getImageUrl(post, 'medium_large');
  const date = format(new Date(post.date), "d 'de' MMMM, yyyy", { locale: es });

  return (
    <article className="group bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-brand-gray/50 dark:border-neutral-700">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative h-52 bg-brand-gray dark:bg-neutral-700 overflow-hidden">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={post.title.rendered}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-brand-gray dark:bg-neutral-700">
              <span className="text-4xl">🔩</span>
            </div>
          )}
        </div>
      </Link>

      <div className="p-6">
        <time className="text-xs text-gray-500 uppercase tracking-wide">{date}</time>
        <h2 className="mt-2 text-lg font-semibold text-brand-dark dark:text-gray-100 group-hover:text-brand-orange transition-colors leading-snug">
          <Link href={`/blog/${post.slug}`}>
            <span dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          </Link>
        </h2>
        <div
          className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-3"
          dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
        />
        <Link
          href={`/blog/${post.slug}`}
          className="inline-block mt-4 text-sm font-semibold text-brand-orange hover:text-brand-orange-dark transition-colors"
        >
          Leer más →
        </Link>
      </div>
    </article>
  );
}

