import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { getEssay, getAllEssayIds } from '@/utils/markdown';

export async function generateStaticParams() {
  const ids = getAllEssayIds();
  return ids.map((id) => ({ id }));
}

interface PageProps {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function EssayPage({ params }: PageProps) {
  if (!params?.id) {
    return null;
  }

  const essay = await getEssay(params.id);

  if (!essay) {
    return (
      <main className="max-w-2xl ml-6 py-16">
        <div className="mb-16">
          <Link href="/" className="text-4xl font-bold hover:text-gray-600 transition-colors block mb-4">
            Intractabull
          </Link>
          <Navigation />
        </div>
        <h1 className="text-3xl font-bold mb-4">Essay Not Found</h1>
        <p>The requested essay could not be found.</p>
      </main>
    );
  }

  return (
    <main className="max-w-2xl ml-6 py-16">
      <div className="mb-16">
        <Link href="/" className="text-4xl font-bold hover:text-gray-600 transition-colors block mb-4">
          Intractabull
        </Link>
        <Navigation />
      </div>
      <article className="prose prose-invert">
        <h1 className="text-3xl font-bold mb-4">{essay.title}</h1>
        {essay.date && (
          <time className="text-sm text-gray-500 block mb-8">
            {new Date(essay.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
        )}
        <div 
          className="mt-8"
          dangerouslySetInnerHTML={{ __html: essay.content }} 
        />
      </article>
    </main>
  );
}
