import { BottomNav } from '@/components/layout/bottom-nav';
import { Header } from '@/components/layout/header';
import { MainSidebar } from '@/components/layout/main-sidebar';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background lg:flex-row">
      <MainSidebar />
      <div className="flex flex-1 flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
            <div className="mx-auto max-w-7xl">
                {children}
            </div>
        </main>
      </div>
      <BottomNav />
    </div>
  );
}
