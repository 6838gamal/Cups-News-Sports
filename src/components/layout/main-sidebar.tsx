'use client';

import Link from 'next/link';
import { Settings } from 'lucide-react';
import { Logo } from '@/components/shared/logo';
import { Button } from '@/components/ui/button';
import { Separator } from '../ui/separator';
import { MainNav } from './main-nav';

export function MainSidebar() {
  return (
    <aside className="hidden lg:flex lg:flex-col lg:w-64 lg:border-r lg:bg-card">
      <div className="flex h-16 items-center px-6">
        <Logo />
      </div>
      <Separator />
      <div className='p-4 flex-1'>
        <MainNav />
      </div>
    </aside>
  );
}
