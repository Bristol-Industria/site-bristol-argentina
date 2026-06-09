import VideoGallery, { type VideoData } from './VideoGallery';

const VIDEO_IDS = ['XMykdqoVT2A', 'jGOaVbUbUAE', 'dsNHKaUz7fY', 'Dl7CRJ5YPLU'];

async function fetchTitle(id: string): Promise<string> {
  try {
    const res = await fetch(
      `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`,
      { next: { revalidate: 86400 } }, // cache for 24 h
    );
    if (!res.ok) throw new Error('oembed failed');
    const data = (await res.json()) as { title: string };
    return data.title;
  } catch {
    return id; // fallback to ID if fetch fails
  }
}

export default async function VideoGalleryServer() {
  const videos: VideoData[] = await Promise.all(
    VIDEO_IDS.map(async (id) => ({ id, title: await fetchTitle(id) })),
  );

  return <VideoGallery videos={videos} />;
}
