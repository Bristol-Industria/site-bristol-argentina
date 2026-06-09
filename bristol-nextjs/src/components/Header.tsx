'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import type { NavItem } from '@/lib/wordpress';

interface HeaderProps {
  menu: NavItem[];
}

export default function Header({ menu }: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm dark:bg-neutral-900 dark:shadow-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src="/logo.png"
              alt="Bristol"
              width={240}
              height={90}
              priority
              className="h-10 w-auto object-contain dark:invert dark:hue-rotate-180"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {menu.map((item) => (
              <NavLink key={item.id} item={item} />
            ))}
          </nav>

          {/* CTA */}
          <a
            href="tel:+549294423-9001"
            className="hidden lg:flex items-center gap-2 text-brand-orange font-semibold hover:text-brand-orange-dark transition-colors"
          >
            <PhoneIcon />
            +54 9 294 423-9001
          </a>

          {/* Burger */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Abrir menú"
            className="md:hidden p-2 rounded text-brand-dark hover:text-brand-orange"
          >
            {open ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-white border-t border-brand-gray px-4 py-6 space-y-4 dark:bg-neutral-900 dark:border-neutral-700">
          {menu.map((item) => (
            <Link
              key={item.id}
              href={item.url}
              onClick={() => setOpen(false)}
              className="block text-brand-dark dark:text-gray-200 font-medium hover:text-brand-orange py-2 border-b border-brand-gray/50 dark:border-neutral-700"
            >
              {item.title}
            </Link>
          ))}
          <a
            href="tel:+549294423-9001"
            className="block text-brand-orange font-semibold pt-2"
          >
            +54 9 294 423-9001
          </a>
        </div>
      )}
    </header>
  );
}

function NavLink({ item }: { item: NavItem }) {
  const hasChildren = item.children.length > 0;

  if (!hasChildren) {
    return (
      <Link
        href={item.url}
        className="text-brand-dark dark:text-gray-200 font-medium hover:text-brand-orange transition-colors"
      >
        {item.title}
      </Link>
    );
  }

  return (
    <div className="relative group">
      <button className="flex items-center gap-1 text-brand-dark dark:text-gray-200 font-medium hover:text-brand-orange transition-colors">
        {item.title}
        <ChevronIcon />
      </button>
      <div className="absolute top-full left-0 mt-1 w-52 bg-white dark:bg-neutral-800 shadow-lg rounded border border-brand-gray/50 dark:border-neutral-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        {item.children.map((child) => (
          <Link
            key={child.id}
            href={child.url}
            className="block px-4 py-3 text-sm text-brand-dark dark:text-gray-200 hover:text-brand-orange hover:bg-brand-gray/30 dark:hover:bg-neutral-700 transition-colors"
          >
            {child.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

