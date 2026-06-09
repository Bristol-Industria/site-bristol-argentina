import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-8xl font-bold text-brand-orange mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-brand-dark mb-2">Página no encontrada</h2>
      <p className="text-gray-500 mb-8 max-w-md">
        La página que buscás no existe o fue movida. Podés volver al inicio o explorar nuestros
        productos.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/" className="btn-primary">
          Volver al inicio
        </Link>
        <Link href="/contacto" className="btn-outline">
          Contactarnos
        </Link>
      </div>
    </div>
  );
}
