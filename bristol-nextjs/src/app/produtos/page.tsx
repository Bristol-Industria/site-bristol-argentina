import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Productos',
  description: 'Implementos para la motosierra, perforadoras hidráulicas y equipos náuticos Bristol.',
};

const categories = [
  {
    title: 'Implementos para Motosierra',
    description: 'Equipos que aprovechan la fuerza de su motosierra',
    href: '/complementos-para-motosierras',
    image: '/uploads/2023/07/ps10-hu.png',
    button: 'ver más',
  },
  {
    title: 'Perforadoras Hidráulicas',
    description: 'Soluciones para perforación en todo tipo de terreno',
    href: '/ahoyadoras',
    image: '/uploads/2023/07/Perfuratriz-Hidraulica-HB-55.png',
    button: 'ver más',
  },
  {
    title: 'Equipos Náuticos',
    description: 'Fuera de borda y bombas de agua',
    href: '/fuera-de-borda',
    image: '/uploads/2016/11/rabeta-motor-vertical.png',
    button: 'ver más',
  },
];

export default function ProductosPage() {
  return (
    <div>
      <div className="bg-brand-dark py-16 text-center">
        <h1 className="text-4xl font-bold text-white">Conozca nuestros productos</h1>
        <div className="w-16 h-1 bg-brand-orange mx-auto mt-4" />
        <p className="text-gray-400 mt-4 text-lg">
          Implementos para la motosierra, perforadoras, equipos y náuticos.
        </p>
      </div>

      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <div
                key={cat.href}
                className="group flex flex-col items-center text-center bg-white dark:bg-neutral-800 rounded-xl border border-brand-gray/60 dark:border-neutral-700 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative w-full h-56 bg-brand-gray/30">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6 flex flex-col items-center flex-1">
                  <h2 className="text-lg font-bold text-brand-dark dark:text-gray-100 mb-2">{cat.title}</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 flex-1">{cat.description}</p>
                  <Link
                    href={cat.href}
                    className="bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-8 py-3 rounded transition-colors text-sm"
                  >
                    {cat.button}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
