
import { getNewsPaginated } from "@/lib/api";
import { NewsFilter } from "@/components/news/news-filter";
import { NewsList } from "@/components/news/news-list";

const NEWS_PER_PAGE = 9;

export default async function AllNewsPage() {
  const initialNews = await getNewsPaginated(0, NEWS_PER_PAGE);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-4 font-headline text-3xl font-bold md:text-4xl">
          All News
        </h1>
        <p className="text-muted-foreground">
          Stay updated with the latest stories from the world of sports.
        </p>
      </div>
      <NewsFilter />
      <NewsList initialNews={initialNews} />
    </div>
  );
}
