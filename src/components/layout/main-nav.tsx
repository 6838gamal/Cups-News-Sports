
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  Trophy, 
  BarChart2, 
  Heart, 
  Settings, 
  Newspaper, 
  CalendarDays,
  ClipboardList,
  Users,
  User,
  Info
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/news', label: 'News', icon: Newspaper },
  { href: '/matches', label: 'Matches', icon: CalendarDays },
  { href: '/cups', label: 'Cups', icon: Trophy },
  { href: '/standings', label: 'Standings', icon: ClipboardList },
  { href: '/teams', label: 'Teams', icon: Users },
  { href: '/players', label: 'Players', icon: User },
  { href: '/analysis', label: 'Analysis', icon: BarChart2 },
  { href: '/favorites', label: 'Favorites', icon: Heart },
  { href: '/settings', label: 'Settings', icon: Settings },
  { href: '/about', label: 'About', icon: Info },
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-2">
        {navItems.map((item) => (
          <Button
            key={item.label}
            variant={pathname === item.href ? 'secondary' : 'ghost'}
            className="w-full justify-start"
            asChild
          >
            <Link href={item.href}>
              <item.icon className="mr-2 h-4 w-4" />
              {item.label}
            </Link>
          </Button>
        ))}
      </nav>
  );
}
