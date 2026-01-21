
import Image from "next/image";
import type { NewsArticle } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";

interface NewsHeaderProps {
  article: NewsArticle;
}

export function NewsHeader({ article }: NewsHeaderProps) {
  return (
    <header className="space-y-4">
      <div className="space-y-2">
        <Badge variant="outline">{article.category}</Badge>
        <h1 className="text-3xl font-bold font-headline leading-tight tracking-tighter md:text-5xl lg:text-6xl">
          {article.title}
        </h1>
        <p className="text-muted-foreground">
          {format(new Date(article.publishedAt), "MMMM d, yyyy")}
        </p>
      </div>
      <div className="relative aspect-video w-full overflow-hidden rounded-lg">
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          className="object-cover"
          priority
          data-ai-hint={article.imageHint}
        />
      </div>
      <p className="text-lg text-muted-foreground md:text-xl">{article.excerpt}</p>
    </header>
  );
}
