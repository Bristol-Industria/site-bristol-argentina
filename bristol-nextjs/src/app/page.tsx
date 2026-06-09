import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import HeroSlider from '@/components/HeroSlider';
import PostCard from '@/components/PostCard';
import ProductCategories from '@/components/ProductCategories';
import VideoGallery from '@/components/VideoGalleryServer';
import { getPosts } from '@/lib/wordpress';
import type { WPSlide } from '@/types/wordpress';

export const metadata: Metadata = {
  title: 'Bristol — Ahoyadores Hidráulicos y Brocas',
  description:
    'Especialistas en ahoyadores hidráulicos y brocas de perforación para la industria argentina.',
};

const heroSlides: WPSlide[] = [
  {
    id: '1',
    title: 'Ahoyadores Hidráulicos de Alta Precisión',
    subtitle: 'Soluciones de perforación para la industria argentina',
    imageUrl: '/hero-1.jpg',
    buttonText: 'Ver productos',
    buttonUrl: '/productos',
  },
  {
    id: '2',
    title: 'Perforadora HB-55',
    subtitle: 'Alta potencia para excavadoras — rendimiento profesional en cada perforación',
    imageUrl: '/hero-2.jpg',
    buttonText: 'Contáctenos',
    buttonUrl: '/contacto',
  },
];


export default async function HomePage() {
  const posts = await getPosts(1, 3);

  return (
    <>
      {/* Hero */}
      <HeroSlider slides={heroSlides} />

      {/* Product categories */}
      <ProductCategories />

      {/* Videos */}
      <VideoGallery />

      {/* A Bristol — real about section */}
      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 lg:h-96 rounded-xl overflow-hidden">
              <Image
                src="/about.jpg"
                alt="Bristol en campo"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="section-title">Sobre Bristol</h2>
              <p className="text-gray-600 dark:text-gray-200 leading-relaxed mb-4">
                Bristol es una empresa brasilera, que se destaca por la fabricación de implementos
                agrícolas relacionados al ramo de la motosierra y en la fabricación de perforadoras
                y mechas, ampliamente utilizadas en la construcción civil.
              </p>
              <p className="text-gray-600 dark:text-gray-200 leading-relaxed mb-8">
                Su línea de productos es bastante extensa, ayudando así a las necesidades de una
                enorme gama de consumidores en Brasil y exterior. Con más de 40 años de tradición,
                Bristol es sinónimo de calidad y seguridad para sus clientes y socios.
              </p>
              <Link href="/sobre" className="btn-primary">
                Saber más
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products CTA banner */}
      <section className="bg-brand-orange py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Encontrá el ahoyador o broca que necesitás
          </h2>
          <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
            Amplio catálogo de equipos disponibles para despacho inmediato.
          </p>
          <Link
            href="/productos"
            className="inline-block bg-white text-brand-orange font-semibold px-8 py-4 rounded hover:bg-orange-50 transition-colors text-lg"
          >
            Ver catálogo de productos
          </Link>
        </div>
      </section>

      {/* Latest posts */}
      {posts.length > 0 && (
        <section className="py-20 bg-gray-50 dark:bg-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <h2 className="section-title">Últimas novedades</h2>
              <Link href="/blog" className="text-brand-orange font-medium hover:underline text-sm">
                Ver todo →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact strip */}
      <section className="py-16 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-1">¿Tenés alguna consulta?</h2>
              <p className="text-gray-400">Estamos para ayudarte. Escribinos o llamanos.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+549294423-9001" className="btn-primary whitespace-nowrap">
                Llamar ahora
              </a>
              <Link href="/contacto" className="btn-outline border-white text-white hover:bg-white hover:text-brand-dark whitespace-nowrap">
                Enviar mensaje
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

