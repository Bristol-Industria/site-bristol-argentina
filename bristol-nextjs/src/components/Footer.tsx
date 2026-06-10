import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Image
              src="/logo-white.png"
              alt="Bristol"
              width={240}
              height={90}
              className="h-10 w-auto object-contain mb-4 brightness-0 invert"
            />
            <p className="text-sm leading-relaxed max-w-sm">
              Ahoyadores Hidráulicos y Brocas — soluciones de perforación de alta precisión
              para la industria argentina.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wide">
              Navegación
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: '/', label: 'Página Inicial' },
                { href: '/sobre', label: 'Sobre' },
                { href: '/ahoyadoras', label: 'Ahoyadoras Hidráulicas' },
                { href: '/complementos-para-motosierras', label: 'Complementos para Motosierras' },
                { href: '/contacto', label: 'Contacto' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="hover:text-brand-orange transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wide">
              Contacto
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <PhoneIcon />
                <a href="tel:+549294466-9553" className="hover:text-brand-orange transition-colors">
                  +54 9 294 466-9553
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MailIcon />
                <a
                  href="mailto:ventas@bristolbr.com.ar"
                  className="hover:text-brand-orange transition-colors break-all"
                >
                  ventas@bristolbr.com.ar
                </a>
              </li>
              <li className="flex items-start gap-2">
                <LocationIcon />
                <address className="not-italic">
                  Rod. RS 401 N°2001<br />
                  São Jerônimo | RS | Brasil
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-center text-xs text-gray-500">
          © {year} Bristol — Ahoyadores Hidráulicos y Brocas. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4 mt-0.5 shrink-0 text-brand-orange" fill="currentColor" viewBox="0 0 20 20">
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="w-4 h-4 mt-0.5 shrink-0 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="w-4 h-4 mt-0.5 shrink-0 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}
