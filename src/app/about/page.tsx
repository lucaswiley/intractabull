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
    <main className="max-w-2xl ml-6 pt-8 pb-16">
      <div className="mb-16">
        <Link href="/" className="text-4xl font-bold hover:text-gray-600 transition-colors block mb-4">
          Intractabull
        </Link>
        <Navigation />
      </div>
      <div className="flex gap-12 items-start">
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-bold mb-8">About</h1>
        <p className="text-lg">
          My name is Lucas Wiley.
        </p>
        <p>
          I am the cofounder and CTO of <a className="text-gray-600 hover:text-white transition-colors" href="https://scoutcities.com" target="_blank" rel="noopener noreferrer">Scout</a>, where we are building site selection technology to advance the American industrial base. We make it easy for industrial businesses to find the perfect location for their next facility. What has historically been a high risk process with countless months of working with consultants, is now a software interface that makes the process of finding a location faster, easier, and more reliable.
        </p>
        <p>
          Before founding Scout, I was the founding data and machine learning engineer at <a className="text-gray-600 hover:text-white transition-colors" href="https://tremendous.com" target="_blank" rel="noopener noreferrer">Tremendous</a>. Before Tremendous, I was one of the first data engineers at <a className="text-gray-600 hover:text-white transition-colors" href="https://flexport.com" target="_blank" rel="noopener noreferrer">Flexport</a>, where I worked full-time while I was in college.
        </p>
        <p>
          I am a firm believer that no problem is too intractable. As long as we keep asking questions, we can always improve the status quo. There is always a better way.
        </p>
        <p>
          Beyond work, I spend my time in the ocean, mountains, and jiu-jitsu gym. These activities teach me humility and appreciation of the universe and all it provides.
        </p>
        </div>
        <div className="w-64 flex-shrink-0 mt-20">
          <Image
            src="/images/profile.jpeg"
            alt="Lucas Wiley"
            width={256}
            height={256}
            className="rounded-lg"
            priority
          />
        </div>
      </div>
    </main>
  );
}
