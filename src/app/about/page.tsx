import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Intractabull',
  description: 'About Lucas Wiley - CTO and cofounder of Scout, building site selection technology to advance the American industrial base.',
  openGraph: {
    title: 'About Lucas Wiley - Intractabull',
    description: 'About Lucas Wiley - CTO and cofounder of Scout, building site selection technology to advance the American industrial base.',
    type: 'profile',
    images: [{
      url: '/images/profile.jpeg',
      width: 256,
      height: 256,
      alt: 'Lucas Wiley',
    }],
  },
};

export default function About() {
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
      <div className="flex flex-col md:flex-row md:gap-12 items-start">
        
        <div className="flex-1 space-y-5">
          <h1 className="text-3xl font-bold mb-8">About</h1>
          <p className="text-lg font-medium">
            My name is Lucas Wiley.
          </p>
          <p className="text-base sm:text-lg leading-relaxed">
            I am the cofounder and CTO of <a className="text-blue-400 hover:text-blue-300 transition-colors font-medium underline" href="https://scoutcities.com" target="_blank" rel="noopener noreferrer">Scout</a>, where we are building site selection technology to advance the American industrial base. We use AI to make it easy for industrial businesses to find the perfect location for their next facility. What has historically been a high risk process with countless months of working with consultants, is now a software interface that makes the process of finding a location faster, easier, and more reliable.
          </p>
          <p className="text-base sm:text-lg leading-relaxed">
            Before founding Scout, I was the founding data and machine learning engineer at <a className="text-blue-400 hover:text-blue-300 transition-colors font-medium underline" href="https://tremendous.com" target="_blank" rel="noopener noreferrer">Tremendous</a>. Before Tremendous, I was one of the first data engineers at <a className="text-blue-400 hover:text-blue-300 transition-colors font-medium underline" href="https://flexport.com" target="_blank" rel="noopener noreferrer">Flexport</a>, where I worked full-time while I was in college.
          </p>
          <p className="text-base sm:text-lg leading-relaxed">
            I am a firm believer that no problem is too intractable. As long as we keep asking questions, we can always improve the status quo. There is always a better way.
          </p>
          <p className="text-base sm:text-lg leading-relaxed">
            Beyond work, I spend my time in the ocean and mountains. These activities teach me humility and appreciation of the universe and all it provides.
          </p>
          <div className="md:block w-64 flex-shrink-0 mt-20 mx-auto">
          <Image
            src="/images/profile.jpeg"
            alt="Lucas Wiley"
            width={256}
            height={256}
            className="rounded-lg w-full h-auto"
            priority
          />
        </div>
        </div>
      </div>
    </main>
  );
}
