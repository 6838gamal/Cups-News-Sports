
import Image from 'next/image';
import Link from 'next/link';

import type { Cup } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

interface CupCardProps {
  cup: Cup;
}

export function CupCard({ cup }: CupCardProps) {
  return (
    <Link href={`/cups/${cup.id}`} className="block group">
      <Card className="flex h-full flex-col items-center justify-center text-center transition-all hover:shadow-lg hover:border-primary">
        <CardHeader className="p-4">
            <Image
            src={cup.logoUrl}
            alt={`${cup.name} logo`}
            width={80}
            height={80}
            className="h-20 w-20 object-contain transition-transform duration-300 group-hover:scale-110"
            />
        </CardHeader>
        <CardContent className="p-4 pt-0 flex-1">
            <h3 className="font-headline font-semibold">{cup.name}</h3>
        </CardContent>
        <CardFooter className="p-4 pt-0">
            <p className="text-xs text-muted-foreground">{cup.country}</p>
        </CardFooter>
      </Card>
    </Link>
  );
}
