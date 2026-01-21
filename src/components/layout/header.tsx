import Link from 'next/link';
import { Search, Globe, Menu, Settings } from 'lucide-react';
import { Logo } from '@/components/shared/logo';
import { Input } from '@/components/ui/input';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { MainNav } from './main-nav';
import { Separator } from '../ui/separator';

export function Header() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background/95 px-4 backdrop-blur-sm md:px-6">
      <div className="flex-1">
        <div className="lg:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Open main menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="flex flex-col p-0">
                    <SheetTitle className="sr-only">Menu</SheetTitle>
                    <div className="flex h-16 items-center border-b px-6">
                        <Logo />
                    </div>
                    <div className="flex-1 overflow-y-auto p-4">
                        <MainNav />
                    </div>
                </SheetContent>
            </Sheet>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-end gap-4 md:flex-initial">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search news, matches, cups..."
            className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle language</span>
        </Button>
        {/* Add user profile dropdown here */}
      </div>
    </header>
  );
}
