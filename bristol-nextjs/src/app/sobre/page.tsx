import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sobre Bristol',
  description:
    'Conozca la historia de Bristol — fabricante brasilero líder en perforadoras hidráulicas e implementos para motosierra con más de 40 años de tradición.',
};

export default function SobrePage() {
  return (
    <div>
      {/* Hero */}
      <div className="relative bg-brand-dark h-64 md:h-80 flex items-end">
        <Image
          src="/hero-1.jpg"
          alt="Bristol — Sobre la empresa"
          fill
          className="object-cover opacity-30"
          priority
          sizes="100vw"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Sobre Bristol</h1>
        </div>
      </div>

      {/* Main content */}
      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="text-2xl font-bold text-brand-dark dark:text-gray-100 mb-6 after:block after:w-12 after:h-1 after:bg-brand-orange after:mt-3">
                Más de 40 años de tradición
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-5">
                Bristol es una empresa brasilera que se destaca por la fabricación de implementos
                agrícolas relacionados al ramo de la motosierra y en la fabricación de perforadoras
                hidráulicas y mechas, ampliamente utilizadas en la construcción civil y en la
                agricultura.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-5">
                Su línea de productos es bastante extensa, ayudando así a las necesidades de una
                enorme gama de consumidores en Brasil y exterior. Con más de 40 años de tradición,
                Bristol es sinónimo de calidad y seguridad para sus clientes y socios.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Los productos Bristol están presentes en toda América Latina, siendo referencia en
                perforación hidráulica y en implementos para motosierra de alta performance.
              </p>
            </div>

            <div className="relative h-72 lg:h-full min-h-[320px] rounded-xl overflow-hidden">
              <Image
                src="/about.jpg"
                alt="Bristol en campo"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50 dark:bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-brand-dark dark:text-gray-100 mb-12">
            ¿Por qué elegir Bristol?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🔧',
                title: 'Calidad Comprobada',
                desc: 'Más de cuatro décadas fabricando equipos que soportan las condiciones más exigentes del campo y la obra.',
              },
              {
                icon: '🌎',
                title: 'Presencia Internacional',
                desc: 'Distribuimos nuestros productos en Brasil, Argentina y en toda América Latina.',
              },
              {
                icon: '⚙️',
                title: 'Tecnología Propia',
                desc: 'Desarrollamos nuestros propios sistemas de reducción y acoplamiento para máxima eficiencia.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white dark:bg-neutral-700 rounded-xl p-8 text-center shadow-sm"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-brand-dark dark:text-gray-100 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products CTA */}
      <section className="py-16 bg-brand-orange">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Conozca nuestros productos</h2>
          <p className="text-orange-100 text-lg mb-8 max-w-xl mx-auto">
            Perforadoras hidráulicas, brocas e implementos para motosierra de alta performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ahoyadoras"
              className="inline-block bg-white text-brand-orange font-semibold px-8 py-4 rounded hover:bg-orange-50 transition-colors"
            >
              Ahoyadoras Hidráulicas
            </Link>
            <Link
              href="/complementos-para-motosierras"
              className="inline-block border-2 border-white text-white font-semibold px-8 py-4 rounded hover:bg-white/10 transition-colors"
            >
              Complementos para Motosierras
            </Link>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-3">¿Tenés alguna consulta?</h2>
          <p className="text-gray-400 mb-8">
            Nuestro equipo en Argentina está disponible para atenderte.
          </p>
          <Link
            href="/contacto"
            className="inline-block bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold px-10 py-4 rounded transition-colors"
          >
            Contactar
          </Link>
        </div>
      </section>
    </div>
  );
}
