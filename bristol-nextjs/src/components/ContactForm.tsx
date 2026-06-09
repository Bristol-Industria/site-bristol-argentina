'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';

interface FormValues {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  async function onSubmit(data: FormValues) {
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('send failed');
      setStatus('sent');
      reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-brand-dark mb-1">
          Nombre *
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          {...register('name', { required: 'El nombre es obligatorio' })}
          className="w-full border border-brand-gray dark:border-neutral-600 rounded px-4 py-3 text-sm bg-white dark:bg-neutral-800 text-brand-dark dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition"
          placeholder="Tu nombre completo"
        />
        {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-brand-dark mb-1">
          Correo electrónico *
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          {...register('email', {
            required: 'El correo es obligatorio',
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Correo inválido' },
          })}
          className="w-full border border-brand-gray dark:border-neutral-600 rounded px-4 py-3 text-sm bg-white dark:bg-neutral-800 text-brand-dark dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition"
          placeholder="tu@email.com"
        />
        {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-brand-dark mb-1">
          Teléfono
        </label>
        <input
          id="phone"
          type="tel"
          autoComplete="tel"
          {...register('phone')}
          className="w-full border border-brand-gray dark:border-neutral-600 rounded px-4 py-3 text-sm bg-white dark:bg-neutral-800 text-brand-dark dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition"
          placeholder="+54 9 ..."
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-brand-dark mb-1">
          Mensaje *
        </label>
        <textarea
          id="message"
          rows={5}
          {...register('message', { required: 'El mensaje es obligatorio' })}
          className="w-full border border-brand-gray dark:border-neutral-600 rounded px-4 py-3 text-sm bg-white dark:bg-neutral-800 text-brand-dark dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition resize-none"
          placeholder="¿En qué podemos ayudarte?"
        />
        {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn-primary w-full text-base disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? 'Enviando…' : 'Enviar mensaje'}
      </button>

      {status === 'sent' && (
        <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded p-3">
          ¡Mensaje enviado! Nos comunicaremos contigo pronto.
        </p>
      )}
      {status === 'error' && (
        <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded p-3">
          Ocurrió un error. Por favor escribenos a{' '}
          <a href="mailto:ventas@bristolbr.com.ar" className="underline">
            ventas@bristolbr.com.ar
          </a>
          .
        </p>
      )}
    </form>
  );
}

