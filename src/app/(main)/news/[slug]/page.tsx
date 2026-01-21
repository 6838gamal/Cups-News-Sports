
import { getNewsBySlug, getRelatedNews } from '@/lib/api';
import { notFound } from 'next/navigation';
import { NewsHeader } from '@/components/news/news-header';
import { RelatedNews } from '@/components/news/related-news';
import { Separator } from '@/components/ui/separator';

type NewsDetailsPageProps = {
  params: {
    slug: string;
  };
};

export default async function NewsDetailsPage({ params }: NewsDetailsPageProps) {
  const article = await getNewsBySlug(params.slug);

  if (!article) {
    notFound();
  }
  
  const relatedArticles = await getRelatedNews(params.slug);


  return (
    <div className="container mx-auto max-w-4xl py-8">
      <article className="space-y-8">
        <NewsHeader article={article} />
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {article.content}
        </div>
      </article>

      <Separator className="my-12" />

      <RelatedNews relatedArticles={relatedArticles} />
    </div>
  );
}
