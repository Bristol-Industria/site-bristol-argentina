import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ahoyadoras Hidráulicas',
  description:
    'La línea de perforadoras hidráulicas más completa. Agrícola, Compacto, Pesada, Súper Pesada, Rotativa y Manual.',
};

const equipment = [
  { label: 'Excavadora', image: '/uploads/2023/07/escavadeira-equipamento-1-400x400-1.png' },
  { label: 'Mini Maquina', image: '/uploads/2023/07/miniescavadeira-equipamento-1-400x400-1.png' },
  { label: 'Retroexcavadora', image: '/uploads/2018/05/Perforadora-retroexcavadora-pr-134.png' },
  { label: 'Tractor', image: '/uploads/2023/07/trator-equipamento.png' },
  { label: 'Grua', image: '/uploads/2023/07/guindaste-equipamento-1-400x400-1.png' },
];

const lines = [
  {
    id: 'agricola',
    title: 'Linea Agrícola',
    description: 'Taladros Hidráulicos para Tractor, sin utilizar el Cardam, brindando una operación segura y muy productiva.',
    products: [
      { name: 'Perforadora Hidráulica HT-10', slug: 'ahoyadora-hidraulica-ht-10', image: '/uploads/2023/07/Perfuratriz-Hidraulica-HT-10.png' },
      { name: 'Perforadora Hidráulica HT-14', slug: 'ahoyadora-hidraulica-ht-14', image: '/uploads/2018/05/HT-15-PERFODORA-TRACTOR.png' },
      { name: 'Perforadora Hidráulica HT-60', slug: 'ahoyadora-hidraulica-ht-60', image: '/uploads/2018/05/ht-60-Ahoyadora-tractor.png' },
    ],
  },
  {
    id: 'compacto',
    title: 'Linea Compacto',
    description: 'Taladro compacto que proporciona una excelente relación costo-beneficio.',
    products: [
      { name: 'Perforadora Hidráulica HB-13', slug: 'ahoyadora-hidraulica-hb-13', image: '/uploads/2018/05/HB-16-ahoyadora.png' },
      { name: 'Perforadora Hidráulica HB-14', slug: 'ahoyadora-hidraulica-hb-14', image: '/uploads/2018/05/HB-17-ahoyadora-hidraulica.png' },
      { name: 'Perforadora Hidráulica HB-17', slug: 'ahoyadora-hidraulica-hb-17', image: '/uploads/2018/05/HB-17-ahoyadora-hidraulica.png' },
      { name: 'Perforadora Hidráulica HB-21', slug: 'ahoyadora-hidraulica-hb-21', image: '/uploads/2023/07/Foto-Perfuratriz-Hidraulica-HB-21.png' },
    ],
  },
  {
    id: 'pesada',
    title: 'Línea Pesada',
    description: 'Compuesto por Carenado Ultra Reforzado, Eje Alargado y los mejores componentes del mundo, brindando alta productividad y durabilidad.',
    products: [
      { name: 'Perforadora Hidráulica HB-18', slug: 'ahoyadora-hidraulica-hb-18', image: '/uploads/2023/07/Perfuratriz-Hidraulica-HB-18.png' },
      { name: 'Perforadora Hidráulica HB-23', slug: 'ahoyadora-hidraulica-hb-23', image: '/uploads/2023/07/Perfuratriz-Hidraulica-HB-23.png' },
      { name: 'Perforadora Hidráulica HB-44', slug: 'ahoyadora-hidraulica-hb-44', image: '/uploads/2023/07/Perfuratriz-HB-44-12.jpg' },
    ],
  },
  {
    id: 'super-pesada',
    title: 'Línea Súper Pesada',
    description: 'Compuesto por doble reducción planetaria, carenado ultrareforzado, para trabajos extremos.',
    products: [
      { name: 'Perforadora Hidráulica HB-28', slug: 'ahoyadora-hidraulica-hb-28', image: '/uploads/2023/07/Perfuratriz-Hidraulica-HB-28.png' },
      { name: 'Perforadora Hidráulica HB-55', slug: 'ahoyadora-hidraulica-hb-55', image: '/uploads/2023/07/Perfuratriz-Hidraulica-HB-55.png' },
    ],
  },
  {
    id: 'rotativa',
    title: 'Línea Rotativa',
    description: '',
    products: [
      { name: 'Perforadora Hidráulica PR-134', slug: 'ahoyadora-hidraulica-pr-134', image: '/uploads/2018/05/Perforadora-retroexcavadora-pr-134.png' },
      { name: 'Perforadora Hidráulica P-314', slug: 'ahoyadora-hidraulica-p-314', image: '/uploads/2018/05/Perforadora-Hidraulica-p-314.png' },
    ],
  },
  {
    id: 'manual',
    title: 'Línea Manual',
    description: '',
    products: [
      { name: 'Perforador de suelo PS-05', slug: 'perforador-de-suelo-ps-05', image: '/uploads/2023/07/ps5-hu.png' },
      { name: 'Perforador de suelo PS-06', slug: 'perforador-de-suelo-ps-06', image: '/uploads/2023/07/ps6-2.png' },
      { name: 'Perforador de suelo PS-10', slug: 'perforador-de-suelo-ps-10', image: '/uploads/2023/07/ps10-hu.png' },
    ],
  },
];

const brocas = [
  { name: 'Mecha con Navaja Simple', image: '/uploads/2023/07/Navaja-simple.png' },
  { name: 'Mecha con Garra', image: '/uploads/2023/07/Broca-garra.png' },
  { name: 'Mecha Navaja con Surcador', image: '/uploads/2023/07/Navaja-con-sulcador.png' },
  { name: 'Mecha Tubular', image: '/uploads/2023/07/TUBULAO.png' },
  { name: 'Mecha con bits', image: '/uploads/2023/07/Broca-Conica-com-Bits-1.png' },
  { name: 'Removedor de tocones', image: '/uploads/2023/07/Broca_Destocador.png' },
  { name: 'Mecha Hélice Contínua', image: '/uploads/2023/07/Brocas-Helice-Continua.jpg' },
];

const accesorios = [
  { name: 'Torquímetro Bristol', image: '/uploads/2023/07/Torquimetro.png' },
  { name: 'Soporte para Minicargadora', image: '/uploads/2023/07/suporte-para-mini-cargadora.png' },
  { name: 'Soporte H', image: '/uploads/2023/07/SuporteH.png' },
  { name: 'Manguera Hidráulica', image: '/uploads/2023/07/mangueira-hidraulica.jpg' },
];

const bits = [
  { name: 'BIT RZ2-01 para asfalto', image: '/uploads/2023/07/bit-rz2.jpg' },
];

export default function AhoyadorasPage() {
  return (
    <div>
      {/* Hero */}
      <div className="relative h-[420px] md:h-[520px] flex items-end">
        <Image
          src="/hero-1.jpg"
          alt="Perforadoras Hidráulicas Bristol"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Perforadoras Hidráulicas
          </h1>
          <p className="text-xl text-orange-200 mb-8">La línea de perforadoras hidráulicas más completa</p>
          <a
            href="#presupuesto"
            className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-10 py-4 rounded transition-colors text-lg"
          >
            Presupuesto
          </a>
        </div>
      </div>

      {/* Fuerza, Rendimiento y Tecnología */}
      <section className="py-16 bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-right">
          <h2 className="text-3xl font-bold text-brand-dark dark:text-gray-100 mb-4">
            Fuerza, Rendimiento y Tecnología
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-lg ml-auto">
            Bristol siempre piensa en estas 3 características cuando desarrolla sus productos, para
            mantener siempre el compromiso con el cliente, la calidad de sus equipos, y la seguridad
            de estar siempre a la vanguardia con la mejor performance en tecnología.
          </p>
        </div>
      </section>

      {/* Conozca las Perforadoras */}
      <section className="bg-brand-orange py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-2">Conozca las Perforadoras Bristol</h2>
          <div className="w-16 h-1 bg-white mx-auto my-4" />
          <p className="text-orange-100 mb-2">Aquí encontras todos los modelos de perforadoras</p>
          <div className="w-16 h-1 bg-white mx-auto mb-10" />

          <h3 className="text-2xl font-bold mb-8">Elija su Equipamiento</h3>

          <div className="flex flex-wrap justify-center gap-8">
            {equipment.map((eq) => (
              <div key={eq.label} className="flex flex-col items-center gap-2">
                <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-white/30 bg-white/10">
                  <Image
                    src={eq.image}
                    alt={eq.label}
                    fill
                    className="object-cover"
                    sizes="112px"
                  />
                </div>
                <span className="text-sm font-semibold">{eq.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product lines */}
      <section className="py-16 bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {lines.map((line) => (
            <div key={line.id} className="mb-16">
              <h2 className="text-2xl font-bold text-brand-dark dark:text-gray-100 mb-2">{line.title}</h2>
              {line.description && (
                <p className="text-gray-500 dark:text-gray-400 mb-6">{line.description}</p>
              )}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {line.products.map((product) => (
                  <Link
                    key={product.slug}
                    href={`/ahoyadoras/${product.slug}`}
                    className="group flex flex-col items-center text-center bg-brand-gray/20 dark:bg-neutral-800 rounded-xl border border-brand-gray/50 dark:border-neutral-700 overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="relative w-full h-44 bg-brand-gray/30">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                    <p className="p-3 text-sm font-medium text-brand-dark dark:text-gray-200">
                      {product.name}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Brocas */}
      <section className="py-16 bg-gray-50 dark:bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative mb-10">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t-2 border-brand-orange" /></div>
            <div className="relative text-center">
              <span className="bg-gray-50 dark:bg-neutral-800 px-4 text-sm font-bold tracking-widest text-brand-dark dark:text-gray-200 uppercase">
                Brocas para Ahoyadoras
              </span>
            </div>
          </div>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-10 max-w-3xl mx-auto">
            Bristol produce una amplia variedad de brocas y extensiones, las cuales son dimensionadas y diseñadas de acuerdo a las
            características geológicas imperantes en las más diversas regiones, así como también varían según el tipo de servicio a
            realizar: micropilotes, grandes cimentaciones, electrificación, etc.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {brocas.map((broca) => (
              <div key={broca.name} className="flex flex-col items-center text-center">
                <div className="relative w-full h-40 bg-white dark:bg-neutral-700 rounded-lg border border-brand-gray/50 dark:border-neutral-600 mb-2">
                  <Image
                    src={broca.image}
                    alt={broca.name}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <p className="text-sm font-medium text-brand-dark dark:text-gray-200">{broca.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accesorios */}
      <section className="py-16 bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative mb-10">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t-2 border-brand-orange" /></div>
            <div className="relative text-center">
              <span className="bg-white dark:bg-neutral-900 px-4 text-sm font-bold tracking-widest text-brand-dark dark:text-gray-200 uppercase">
                Accesorios
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {accesorios.map((acc) => (
              <div key={acc.name} className="flex flex-col items-center text-center">
                <div className="relative w-full h-40 bg-brand-gray/20 dark:bg-neutral-800 rounded-lg border border-brand-gray/50 dark:border-neutral-600 mb-2">
                  <Image
                    src={acc.image}
                    alt={acc.name}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <p className="text-sm font-medium text-brand-dark dark:text-gray-200">{acc.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bits */}
      <section className="py-16 bg-gray-50 dark:bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative mb-10">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t-2 border-brand-orange" /></div>
            <div className="relative text-center">
              <span className="bg-gray-50 dark:bg-neutral-800 px-4 text-sm font-bold tracking-widest text-brand-dark dark:text-gray-200 uppercase">
                Bits
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {bits.map((bit) => (
              <div key={bit.name} className="flex flex-col items-center text-center">
                <div className="relative w-full h-40 bg-white dark:bg-neutral-700 rounded-lg border border-brand-gray/50 dark:border-neutral-600 mb-2">
                  <Image
                    src={bit.image}
                    alt={bit.name}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <p className="text-sm font-medium text-brand-dark dark:text-gray-200">{bit.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Presupuesto */}
      <section id="presupuesto" className="py-20 bg-white dark:bg-neutral-900">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-brand-dark dark:text-gray-100 text-center mb-10">
            Presupuesto
          </h2>
          <form
            action="/api/contact"
            method="POST"
            className="space-y-5"
          >
            {[
              { name: 'nombre', label: 'Nombre:' },
              { name: 'empresa', label: 'Empresa:' },
              { name: 'email', label: 'E-mail:' },
              { name: 'telefono', label: 'Telefono:' },
              { name: 'ciudad', label: 'Ciudad:' },
              { name: 'producto', label: 'Producto de interés:' },
            ].map(({ name, label }) => (
              <div key={name}>
                <label className="block text-brand-orange font-medium mb-1">{label}</label>
                <input
                  type={name === 'email' ? 'email' : 'text'}
                  name={name}
                  className="w-full border border-gray-300 dark:border-neutral-600 rounded px-3 py-2 bg-white dark:bg-neutral-800 text-brand-dark dark:text-gray-200 focus:outline-none focus:border-brand-orange"
                />
              </div>
            ))}
            <div>
              <label className="block text-brand-orange font-medium mb-1">Mensaje:</label>
              <textarea
                name="mensaje"
                rows={5}
                className="w-full border border-gray-300 dark:border-neutral-600 rounded px-3 py-2 bg-white dark:bg-neutral-800 text-brand-dark dark:text-gray-200 focus:outline-none focus:border-brand-orange"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold py-3 rounded uppercase tracking-wide transition-colors"
            >
              ENVIAR
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
