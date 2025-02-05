import Link from 'next/link';

type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

const navItems: NavItem[] = [
  { label: 'about', href: '/about' },
  { label: 'essays', href: '/essays' },
  { label: 'twitter', href: 'https://x.com/intractabull', external: true },
  { label: 'email', href: 'mailto:lukewiley1@gmail.com', external: true },
  { label: 'github', href: 'https://github.com/lucaswiley', external: true },
];

const linkStyles = 'text-gray-500 hover:text-white transition-colors';

const Navigation = () => (
  <nav>
    <div className="flex items-start space-x-6">
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
