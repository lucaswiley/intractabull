import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="w-full py-4 px-6 flex items-center justify-center gap-6 text-white">
      {/* Navigation Links */}
      <div className="flex items-center space-x-6">
        <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
          about
        </Link>
        <Link href="/essays" className="text-gray-300 hover:text-white transition-colors">
          essays
        </Link>
        <a 
          href="https://x.com/intractabull" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-300 hover:text-white transition-colors"
        >
          twitter
        </a>
        <a 
          href="mailto:lukewiley1@gmail.com" 
          className="text-gray-300 hover:text-white transition-colors"
        >
          email
        </a>
        <a 
          href="https://github.com/lucaswiley" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-300 hover:text-white transition-colors"
        >
          github
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
