import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { getEssay } from '@/utils/markdown';
import { Metadata } from 'next';

export async function generateMetadata(
  { params }: { params: Promise<{ id: string }> }
): Promise<Metadata> {
  const { id } = await params;
  const essay = await getEssay(id);

  if (!essay) {
    return {
      title: 'Essay Not Found - Intractabull',
      description: 'The requested essay could not be found.',
    };
  }

  return {
    title: `${essay.title} - Intractabull`,
    description: essay.excerpt || `An essay about ${essay.title.toLowerCase()} by Lucas Wiley`,
    openGraph: {
      title: essay.title,
      description: essay.excerpt || `An essay about ${essay.title.toLowerCase()} by Lucas Wiley`,
      type: 'article',
      authors: ['Lucas Wiley'],
      publishedTime: essay.date,
    },
  };
};

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EssayPage({ params }: PageProps) {
  const { id } = await params;
  
  if (!id) {
    throw new Error('Missing essay ID');
  }

  const essay = await getEssay(id);

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
    <main className="max-w-4xl ml-6 pt-8 pb-16">
      <div className="mb-16">
        <Link href="/" className="text-4xl font-bold hover:text-gray-600 transition-colors block mb-4">
          Intractabull
        </Link>
        <Navigation />
      </div>
      <article className="prose prose-invert">
        <h1 className="text-3xl font-bold mb-8">{essay.title}</h1>
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
          className="mt-8 max-w-4xl"
          dangerouslySetInnerHTML={{ __html: essay.content }} 
        />
      </article>
    </main>
  );
}
