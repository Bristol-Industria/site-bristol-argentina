'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback } from 'react';
import type { WPSlide } from '@/types/wordpress';

interface HeroSliderProps {
  slides: WPSlide[];
}

export default function HeroSlider({ slides }: HeroSliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  if (!slides.length) return null;

  return (
    <section className="relative overflow-hidden" aria-label="Hero slider">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide) => (
            <div key={slide.id} className="relative min-w-full h-[480px] md:h-[620px]">
              {slide.imageUrl && (
                <Image
                  src={slide.imageUrl}
                  alt={slide.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="100vw"
                />
              )}
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Content */}
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="max-w-2xl">
                    <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
                      {slide.title}
                    </h1>
                    {slide.subtitle && (
                      <p className="text-lg md:text-xl text-gray-200 mb-8">{slide.subtitle}</p>
                    )}
                    {slide.buttonText && slide.buttonUrl && (
                      <Link href={slide.buttonUrl} className="btn-primary text-lg">
                        {slide.buttonText}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Prev / Next */}
      {slides.length > 1 && (
        <>
          <button
            onClick={scrollPrev}
            aria-label="Diapositiva anterior"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-brand-orange text-white rounded-full p-3 transition-colors backdrop-blur-sm"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={scrollNext}
            aria-label="Diapositiva siguiente"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-brand-orange text-white rounded-full p-3 transition-colors backdrop-blur-sm"
          >
            <ChevronRight />
          </button>
        </>
      )}
    </section>
  );
}

function ChevronLeft() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}
