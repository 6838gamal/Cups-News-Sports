import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

import type { NewsArticle } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface NewsCardProps {
  article: NewsArticle;
}

export function NewsCard({ article }: NewsCardProps) {
    const publishedAt = new Date(article.publishedAt);
    const timeAgo = formatDistanceToNow(publishedAt, { addSuffix: true });
  return (
    <Card className="flex h-full flex-col overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="p-0">
        <Link href={`/news/${article.slug}`} className="block aspect-video w-full relative overflow-hidden">
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={article.imageHint}
          />
        </Link>
      </CardHeader>
      <CardContent className="flex-1 p-4">
        <Badge variant="outline" className="mb-2">{article.category}</Badge>
        <CardTitle className="mb-2 text-lg font-headline leading-tight">
          <Link href={`/news/${article.slug}`} className="hover:text-primary">
            {article.title}
          </Link>
        </CardTitle>
        <p className="text-sm text-muted-foreground">{article.excerpt}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center p-4 pt-0 text-xs text-muted-foreground">
        <span>{timeAgo}</span>
        <Link href={`/news/${article.slug}`} className="flex items-center gap-1 hover:text-primary">
            Read More
            <ArrowUpRight className="h-3 w-3" />
        </Link>
      </CardFooter>
    </Card>
  );
}
