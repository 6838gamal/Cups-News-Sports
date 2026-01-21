import Image from 'next/image';
import Link from 'next/link';
import { BrainCircuit, User } from 'lucide-react';

import type { AnalysisArticle } from '@/lib/types';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

interface AnalysisCardProps {
  article: AnalysisArticle;
}

export function AnalysisCard({ article }: AnalysisCardProps) {
  const Icon = article.type === 'ai' ? BrainCircuit : User;
  
  return (
    <Card className="flex h-full flex-col overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="p-0">
        <Link href={`/analysis/${article.id}`} className="block aspect-video w-full relative overflow-hidden">
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
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
            <Avatar className="h-6 w-6">
                <AvatarFallback>
                    <Icon className="h-4 w-4" />
                </AvatarFallback>
            </Avatar>
            <span>{article.author}</span>
            <span className="mx-1">•</span>
            <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
        </div>
        <CardTitle className="mb-2 text-lg font-headline leading-tight">
          <Link href={`/analysis/${article.id}`} className="hover:text-primary">
            {article.title}
          </Link>
        </CardTitle>
        <p className="text-sm text-muted-foreground">{article.excerpt}</p>
      </CardContent>
    </Card>
  );
}
