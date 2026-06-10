import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Ponete en contacto con Bristol. Consultas sobre ahoyadores hidráulicos y brocas.',
};

export default function ContactoPage() {
  return (
    <div>
      {/* Page header */}
      <div className="bg-brand-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-2">Contacto</h1>
          <p className="text-gray-400">Estamos para ayudarte. Escribinos o llamanos.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <h2 className="section-title">Información de contacto</h2>
            <p className="text-gray-600 dark:text-gray-200 mb-8 leading-relaxed">
              ¿Tenés alguna consulta sobre nuestros productos o necesitás un presupuesto?
              Completá el formulario o comunicate directamente con nosotros.
            </p>

            <ul className="space-y-6 text-brand-dark dark:text-gray-200">
              <ContactItem
                icon={<PhoneIcon />}
                label="Teléfono"
                content={
                  <a
                    href="tel:+549294466-9553"
                    className="hover:text-brand-orange transition-colors"
                  >
                    +54 9 294 466-9553
                  </a>
                }
              />
              <ContactItem
                icon={<MailIcon />}
                label="Correo electrónico"
                content={
                  <a
                    href="mailto:ventas@bristolbr.com.ar"
                    className="hover:text-brand-orange transition-colors break-all"
                  >
                    ventas@bristolbr.com.ar
                  </a>
                }
              />
              <ContactItem
                icon={<LocationIcon />}
                label="Dirección"
                content={
                  <address className="not-italic">
                    Rod. RS 401 N°2001<br />
                    São Jerônimo | RS | Brasil
                  </address>
                }
              />
            </ul>

            {/* Map embed placeholder */}
            <div className="mt-10 rounded-xl overflow-hidden h-56 bg-brand-gray">
              <iframe
                title="Ubicación Bristol"
                src="https://maps.google.com/maps?q=Bristol+Implementos+Rod+RS+401+S%C3%A3o+Jer%C3%B4nimo+RS&output=embed&z=14"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="section-title">Envianos un mensaje</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactItem({
  icon,
  label,
  content,
}: {
  icon: React.ReactNode;
  label: string;
  content: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-4">
      <div className="shrink-0 w-10 h-10 bg-brand-orange/10 rounded-full flex items-center justify-center text-brand-orange">
        {icon}
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-0.5">
          {label}
        </p>
        <div className="text-brand-dark dark:text-gray-100">{content}</div>
      </div>
    </li>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}
