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
    imageUrl: '/uploads/2023/07/ps10-hu.png',
  },
  {
    title: 'Perforadoras Hidráulicas',
    description: 'Soluciones para perforación en todo tipo de terreno',
    href: '/ahoyadoras',
    imageUrl: '/uploads/2023/07/Perfuratriz-Hidraulica-HB-55.png',
  },
  {
    title: 'Equipos Náuticos',
    description: 'Fuera de borda y bombas de agua Bristol',
    href: '/fuera-de-borda',
    imageUrl: '/uploads/2016/11/rabeta-motor-vertical.png',
  },
];

export default function ProductCategories() {
  return (
    <section className="py-20 bg-brand-orange">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3 after:block after:w-16 after:h-1 after:bg-white/60 after:mx-auto after:mt-3">
            Conozca nuestros productos
          </h2>
          <p className="text-orange-100 text-lg mt-4">
            Implementos para la motosierra, perforadoras, equipos y náuticos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.href}
              className="group flex flex-col items-center text-center bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative w-full h-56 bg-gray-100">
                <Image
                  src={cat.imageUrl}
                  alt={cat.title}
                  fill
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6 flex flex-col items-center flex-1">
                <h3 className="text-lg font-bold text-brand-dark mb-2">{cat.title}</h3>
                <p className="text-sm text-gray-500 mb-6 flex-1">{cat.description}</p>
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

