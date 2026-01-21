'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import type { NewsArticle } from '@/lib/types';
import { Badge } from '../ui/badge';

interface BreakingNewsProps {
  articles: NewsArticle[];
}

export function BreakingNews({ articles }: BreakingNewsProps) {
  return (
    <Carousel
      className="w-full"
    >
      <CarouselContent>
        {articles.map((article) => (
          <CarouselItem key={article.id}>
            <Link href={`/news/${article.slug}`}>
              <Card className="overflow-hidden border-none shadow-lg">
                <CardContent className="relative aspect-[2/1] p-0">
                  <Image
                    src={article.imageUrl}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    data-ai-hint={article.imageHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <Badge variant="destructive" className="mb-2 bg-accent text-accent-foreground">Breaking News</Badge>
                    <h2 className="font-headline text-2xl font-bold leading-tight md:text-3xl lg:text-4xl">
                      {article.title}
                    </h2>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 hidden sm:inline-flex" />
      <CarouselNext className="absolute right-4 hidden sm:inline-flex" />
    </Carousel>
  );
}
