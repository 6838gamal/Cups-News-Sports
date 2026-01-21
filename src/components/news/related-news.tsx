
import type { NewsArticle } from "@/lib/types";
import { NewsCard } from "./news-card";

interface RelatedNewsProps {
  relatedArticles: NewsArticle[];
}

export function RelatedNews({ relatedArticles }: RelatedNewsProps) {
  if (relatedArticles.length === 0) {
    return null;
  }

  return (
    <section>
      <h2 className="mb-6 font-headline text-2xl font-bold">Related News</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {relatedArticles.map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}
