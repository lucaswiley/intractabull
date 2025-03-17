import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { Metadata } from 'next';
import { getEssay, getAllEssayIds, Essay } from '@/utils/markdown';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Essays - Intractabull',
  description: 'Essays by Lucas Wiley on technology, business, and life.',
  openGraph: {
    title: 'Essays - Intractabull',
    description: 'Essays by Lucas Wiley on technology, business, and life.',
    type: 'website',
  },
};

async function getEssays() {
  const ids = getAllEssayIds();
  const essays = await Promise.all(ids.map(id => getEssay(id)));
  // Filter out null essays and sort by date
  return essays
    .filter((essay): essay is Essay => essay !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default async function Essays() {
  const essays = await getEssays();
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 pb-16 relative">
      <Link href="https://scoutcities.com" target="_blank" rel="noopener noreferrer" className="fixed right-6">
        <Image
          src="/scout.ico"
          alt="Scout Icon"
          width={48}
          height={48}
          priority
          className="hover:opacity-80 transition-opacity"
        />
      </Link>
      <div className="mb-16">
        <Link href="/" className="text-4xl font-bold hover:text-gray-600 transition-colors block mb-4">
          Intractabull
        </Link>
        <Navigation /> 
      </div>
      <h1 className="text-3xl font-bold mb-8">Essays</h1>
      <div className="space-y-6">
        {essays.map((essay) => (
          <Link 
            key={essay.id}
            href={`/essays/${essay.id}`}
            className="block p-3 -mx-3 rounded-lg hover:bg-gray-800/30 transition-colors"
          >
            <div className="text-lg sm:text-xl font-medium hover:text-gray-300 transition-colors cursor-pointer">
              {essay.title}
            </div>
            {essay.date && (
              <time className="text-sm text-gray-400 block mt-2">
                {new Date(essay.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            )}
          </Link>
        ))}
      </div>
    </main>
  );
}
