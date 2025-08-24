import Link from 'next/link';

type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

const navItems: NavItem[] = [
  { label: 'about', href: '/about' },
  { label: 'essays', href: '/essays' },
  { label: 'x', href: 'https://x.com/intractabull', external: true },
  { label: 'email', href: 'mailto:lukewiley1@gmail.com', external: true },
  { label: 'github', href: 'https://github.com/lucaswiley', external: true },
];

const linkStyles = 'text-gray-500 hover:text-white transition-colors text-sm sm:text-base font-medium py-1';

const Navigation = () => (
  <nav className="w-full overflow-x-auto pb-2">
    <div className="flex flex-wrap items-start gap-4 sm:gap-6 justify-center">
      {navItems.map(({ label, href, external }) => {
        const Component = external ? 'a' : Link;
        return (
          <Component
            key={label}
            href={href}
            {...external && {
              target: '_blank',
              rel: 'noopener noreferrer'
            }}
            className={linkStyles}
          >
            {label}
          </Component>
        );
      })}
    </div>
  </nav>
);

export default Navigation;
