import type { Metadata } from 'next';
import { getPosts } from '@/lib/wordpress';
import PostCard from '@/components/PostCard';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Noticias y artículos sobre perforación hidráulica, ahoyadores y brocas.',
};

export default async function BlogPage() {
  const posts = await getPosts(1, 12);

  return (
    <div>
      {/* Page header */}
      <div className="bg-brand-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-2">Blog</h1>
          <p className="text-gray-400">Novedades, técnica y consejos del sector.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {posts.length === 0 ? (
          <p className="text-gray-500 text-center py-20">No hay artículos publicados aún.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
