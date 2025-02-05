import Link from 'next/link';
import Navigation from '@/components/Navigation';

import { getEssay, getAllEssayIds } from '@/utils/markdown';

async function getEssays() {
  const ids = getAllEssayIds();
  const essays = await Promise.all(ids.map(id => getEssay(id)));
  return essays.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default async function Essays() {
  const essays = await getEssays();
  return (
    <main className="max-w-2xl ml-6 pt-8 pb-16">
      <div className="mb-16">
        <Link href="/" className="text-4xl font-bold hover:text-gray-600 transition-colors block mb-4">
          Intractabull
        </Link>
        <Navigation /> 
      </div>
      <h1 className="text-3xl font-bold mb-8">Essays</h1>
      <div className="space-y-4">
        {essays.map((essay) => (
          <Link 
            key={essay.id}
            href={`/essays/${essay.id}`}
            className="block"
          >
            <div className="text-lg hover:text-gray-600 transition-colors cursor-pointer">
              {essay.title}
            </div>
            {essay.date && (
              <time className="text-sm text-gray-500 block mt-1">
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
