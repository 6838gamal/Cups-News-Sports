import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 text-xl font-bold font-headline text-foreground">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a10 10 0 0 0-10 10" />
        <path d="M12 22a10 10 0 0 1-10-10" />
        <path d="M2 12a10 10 0 0 1 10 10" />
        <path d="M22 12a10 10 0 0 0-10 10" />
      </svg>
      <span>Cups News</span>
    </Link>
  );
}
