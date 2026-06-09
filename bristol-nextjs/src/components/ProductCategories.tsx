import Image from 'next/image';
import Link from 'next/link';

interface Category {
  title: string;
  description: string;
  href: string;
  imageUrl: string;
}

const categories: Category[] = [
  {
    title: 'Implementos para Motosierra',
    description: 'Equipos que aprovechan la fuerza de su motosierra',
    href: '/implementos-para-motossierras',
    imageUrl: 'https://bristolbr.com.ar/wp-content/uploads/2023/07/ps10-hu.png',
  },
  {
    title: 'Perforadoras Hidráulicas',
    description: 'Soluciones para perforación en todo tipo de terreno',
    href: '/ahoyadoras',
    imageUrl: 'https://bristolbr.com.ar/wp-content/uploads/2023/07/Perfuratriz-Hidraulica-HB-55.png',
  },
  {
    title: 'Equipos Náuticos',
    description: 'Fuera de borda y bombas de agua Bristol',
    href: '/fuera-de-borda',
    imageUrl: 'https://bristolbr.com.ar/wp-content/uploads/2018/05/HB-16-ahoyadora.png',
  },
];

export default function ProductCategories() {
  return (
    <section className="py-20 bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-dark dark:text-gray-100 mb-3 after:block after:w-16 after:h-1 after:bg-brand-orange after:mx-auto after:mt-3">
            Conozca nuestros productos
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg mt-4">
            Implementos para la motosierra, perforadoras, equipos y náuticos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.href}
              className="group flex flex-col items-center text-center bg-white dark:bg-neutral-800 rounded-xl border border-brand-gray/60 dark:border-neutral-700 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative w-full h-56 bg-brand-gray/30">
                <Image
                  src={cat.imageUrl}
                  alt={cat.title}
                  fill
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  unoptimized={cat.imageUrl.startsWith('https://bristolbr')}
                />
              </div>
              <div className="p-6 flex flex-col items-center flex-1">
                <h3 className="text-lg font-bold text-brand-dark dark:text-gray-100 mb-2">{cat.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 flex-1">{cat.description}</p>
                <Link
                  href={cat.href}
                  className="btn-primary text-sm px-8"
                >
                  ver más
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

