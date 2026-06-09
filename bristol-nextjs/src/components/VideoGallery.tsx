'use client';

import { useState } from 'react';
import Image from 'next/image';

export interface VideoData {
  id: string;
  title: string;
}

interface VideoGalleryProps {
  videos: VideoData[];
}

export default function VideoGallery({ videos }: VideoGalleryProps) {
  return (
    <section className="py-16 bg-gray-50 dark:bg-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((v) => (
            <VideoCard key={v.id} video={v} />
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoCard({ video }: { video: VideoData }) {
  const [playing, setPlaying] = useState(false);
  const thumb = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;

  if (playing) {
    return (
      <div className="flex flex-col gap-2">
        <div className="rounded-xl overflow-hidden shadow-md aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
        <p className="text-sm font-medium text-brand-dark dark:text-gray-200 line-clamp-2 leading-snug">
          {video.title}
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <button
        onClick={() => setPlaying(true)}
        aria-label={`Reproducir: ${video.title}`}
        className="group relative block w-full aspect-video rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
      >
        <Image
          src={thumb}
          alt={video.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          unoptimized
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
          <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </button>
      <p className="text-sm font-medium text-brand-dark dark:text-gray-200 line-clamp-2 leading-snug">
        {video.title}
      </p>
    </div>
  );
}

