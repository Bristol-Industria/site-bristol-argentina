import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Complementos para Motosierras',
  description:
    'Implementos Bristol para motosierra: furadeira, bomba de agua, cortador abrasivo, fumigador, roçadeira y más. Adapte su motosierra para múltiples tareas.',
};

const implementos = [
  {
    name: 'Furadeira (Taladro)',
    slug: 'furadeira',
    description: 'Adapta la motosierra para taladrar postes y maderas con alta eficiencia.',
    image: '/uploads/2017/07/Furadeira.png',
  },
  {
    name: 'Perforador de Suelo PS-05',
    slug: 'perforador-de-suelo-ps-05',
    description: 'Perfora el suelo acoplado a su motosierra sin necesidad de cardán.',
    image: '/uploads/2023/07/ps5-hu.png',
  },
  {
    name: 'Perforador de Suelo PS-06',
    slug: 'perforador-de-suelo-ps-06',
    description: 'Modelo compacto de perforador de suelo para motosierra.',
    image: '/uploads/2023/07/ps6-2.png',
  },
  {
    name: 'Perforador de Suelo PS-10',
    slug: 'perforador-de-suelo-ps-10',
    description: 'Mayor potencia para perforación de suelo acoplada a motosierra.',
    image: '/uploads/2023/07/ps10-hu.png',
  },
  {
    name: 'Bomba de Agua',
    slug: 'bomba-de-agua',
    description: 'Bomba de agua acoplada a la motosierra para irrigación y transferencia.',
    image: '/uploads/2016/11/bomba-dagua-st.png',
  },
  {
    name: 'Cortador Abrasivo',
    slug: 'cortador-abrasivo',
    description: 'Disco de corte abrasivo acoplado a motosierra para corte de materiales.',
    image: '/uploads/2016/11/cortador-abrasivo.png',
  },
  {
    name: 'Fumigador',
    slug: 'fumigador',
    description: 'Pulverizador de gran alcance acoplado a la motosierra.',
    image: '/uploads/2017/08/fumigador.png',
  },
  {
    name: 'Rabeta para Motosierra',
    slug: 'rabeta-para-motosierra',
    description: 'Motor de popa acoplable a la motosierra para embarcaciones.',
    image: '/uploads/2017/07/rabeta.png',
  },
  {
    name: 'Tira-Tabua',
    slug: 'tira-tabua',
    description: 'Aserrador portátil acoplado a la motosierra para procesado de troncos.',
    image: '/uploads/2017/07/tira-tabua.png',
  },
];

const adapters = [
  { code: 'RC 9668', brand: 'Stihl MS440 / MS660', image: '/uploads/2018/05/rc-9668.png' },
  { code: 'RC 9728', brand: 'Husqvarna 281 / 288XP', image: '/uploads/2016/11/rc-9728.png' },
  { code: 'RC 9733', brand: 'Husqvarna 268 / 272XP', image: '/uploads/2016/11/rc-9733.png' },
  { code: 'RC 9747', brand: 'Partner / Efco', image: '/uploads/2016/11/rc-9747.png' },
  { code: 'RC 9777', brand: 'Stihl MS230 / MS250', image: '/uploads/2021/06/rc-9777.png' },
  { code: 'RC 9784', brand: 'Husqvarna 137 / 142', image: '/uploads/2016/11/rc-9784.png' },
  { code: 'RC 9795', brand: 'Husqvarna 345 / 350', image: '/uploads/2021/06/rc-9795.png' },
  { code: 'RC 9820', brand: 'Stihl MS290 / MS310', image: '/uploads/2021/06/rc-9820.png' },
  { code: 'RC 9864', brand: 'Husqvarna 365 / 372XP', image: '/uploads/2016/11/rc-9864.png' },
  { code: 'RC 9879', brand: 'Stihl MS361 / MS391', image: '/uploads/2016/11/rc-9879.png' },
];

export default function ComplementosPage() {
  return (
    <div>
      {/* Hero */}
      <div className="relative h-[380px] md:h-[480px] flex items-end">
        <Image
          src="/uploads/2017/07/Furadeira.png"
          alt="Complementos para Motosierras Bristol"
          fill
          className="object-contain bg-brand-dark"
          priority
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 w-full text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Complementos para Motosierras
          </h1>
          <p className="text-xl text-orange-200">
            Amplíe la capacidad de trabajo de su motosierra
          </p>
        </div>
      </div>

      {/* Intro */}
      <section className="py-14 bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-dark dark:text-gray-100 mb-3 after:block after:w-16 after:h-1 after:bg-brand-orange after:mx-auto after:mt-3">
            Conozca los Implementos Bristol
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg mt-5 max-w-3xl mx-auto">
            Bristol fabrica implementos que aprovechan la fuerza de su motosierra para realizar
            múltiples tareas: perforar, bombear agua, cortar, fumigar y más. Compatibles con las
            principales marcas del mercado.
          </p>
        </div>
      </section>

      {/* Products grid */}
      <section className="pb-20 bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {implementos.map((item) => (
              <div
                key={item.slug}
                className="group flex flex-col items-center text-center bg-white dark:bg-neutral-800 rounded-xl border border-brand-gray/60 dark:border-neutral-700 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative w-full h-52 bg-brand-gray/20 dark:bg-neutral-700">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5 flex flex-col items-center flex-1">
                  <h3 className="text-base font-bold text-brand-dark dark:text-gray-100 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-5 flex-1">
                    {item.description}
                  </p>
                  <Link
                    href={`/complementos-para-motosierras/${item.slug}`}
                    className="bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-7 py-2.5 rounded transition-colors text-sm"
                  >
                    ver más
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-brand-orange py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿No encontraste lo que buscabas?
          </h2>
          <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
            Contáctenos y nuestro equipo le ayudará a encontrar el implemento correcto para su
            motosierra.
          </p>
          <Link
            href="/contacto"
            className="inline-block bg-white text-brand-orange font-semibold px-10 py-4 rounded hover:bg-orange-50 transition-colors text-lg"
          >
            Contactar ahora
          </Link>
        </div>
      </section>
    </div>
  );
}
