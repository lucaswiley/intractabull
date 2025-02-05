import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function Essays() {
  return (
    <main className="max-w-2xl ml-6 pt-8 pb-16">
      <div className="mb-16">
        <Link href="/" className="text-4xl font-bold hover:text-gray-600 transition-colors block mb-4">
          Intractabull
        </Link>
        <Navigation /> 
      </div>
      <h1 className="text-3xl font-bold mb-8">About</h1>
      <div className="space-y-4">
        <p className="text-lg">
          My name is Lucas Wiley.
        </p>
        <p className="text-lg">
          I am the cofounder and CTO of <a className="text-gray-600 hover:text-white transition-colors" href="https://scoutcities.com" target="_blank" rel="noopener noreferrer">Scout</a>, where we advance the american industrial base through site selection technology. We make it easy for industrial businesses to find the perfect location for their next facility. What has historically been a high risk process with countless months of working with consultants, is now a software interface that makes the process of finding a location faster, easier, and more reliable.
        </p>
        <p>
          If Scout's mission appeals to you, <a className="text-gray-600 hover:text-white transition-colors" href="mailto:contact@lucas@scoutcities.com" target="_blank" rel="noopener noreferrer">email me</a>.
        </p>
        <p>
          Before founding Scout, I was the lead data and machine learning engineer at <a className="text-gray-600 hover:text-white transition-colors" href="https://tremendous.com" target="_blank" rel="noopener noreferrer">Tremendous</a>. Before Tremendous, I was one of the first data engineers at <a className="text-gray-600 hover:text-white transition-colors" href="https://flexport.com" target="_blank" rel="noopener noreferrer">Flexport</a>, where I worked full-time while I was in college.
        </p>
        <p>
          Other projects of mine include <a className="text-gray-600 hover:text-white transition-colors" href="https://olympicventurenetwork.com" target="_blank" rel="noopener noreferrer">Olympic Venture Network</a> and <a className="text-gray-600 hover:text-white transition-colors" href="https://facade-improvement.com" target="_blank" rel="noopener noreferrer">Facade-Improvement.com</a>, where I work on local economic development in my hometown in rural Northwest Washington.
        </p>
        <p>
          I am a firm believer that no problem is too intractable. As long as we keep asking questions, we can always improve the status quo. There is always a better way.
        </p>
        <p>
          Beyond my work, I spend as much time as possible in the ocean, in the mountains, and in the jiu-jitsu gym. These things teach me to stay humble and appreciate the earth for all it provides. I do my best to surround myself with people whom I can learn from. 
        </p>
      </div>
    </main>
  );
}
