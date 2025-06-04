import Link from 'next/link';
import { ShieldCheckIcon } from 'lucide-react';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <ShieldCheckIcon className="h-8 w-8 text-primary" />
          <span className="font-bold text-xl text-primary font-headline">Frontalix</span>
        </Link>
        <nav className="flex items-center space-x-4">
          <Link href="#ai-insights" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            AI Tax Insights
          </Link>
        </nav>
      </div>
    </header>
  );
}
