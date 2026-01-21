
"use client";

import { useState, useEffect, useRef } from "react";
import { NewsCard } from "./news-card";
import { Skeleton } from "../ui/skeleton";
import type { NewsArticle } from "@/lib/types";
import { fetchNews } from "@/app/(main)/news/actions";

const NEWS_PER_PAGE = 9;

interface NewsListProps {
  initialNews: NewsArticle[];
}

export function NewsList({ initialNews }: NewsListProps) {
  const [news, setNews] = useState<NewsArticle[]>(initialNews);
  const [offset, setOffset] = useState(initialNews.length);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const loaderRef = useRef(null);

  const loadMoreNews = async () => {
    if (isLoading || !hasMore) return;
    setIsLoading(true);
    const newNews = await fetchNews(offset, NEWS_PER_PAGE);
    if (newNews.length > 0) {
      setNews((prev) => [...prev, ...newNews]);
      setOffset((prev) => prev + newNews.length);
    }
    if (newNews.length < NEWS_PER_PAGE) {
      setHasMore(false);
    }
    setIsLoading(false);
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMoreNews();
        }
      },
      { threshold: 1.0 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [loaderRef, loadMoreNews]);

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {news.map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
        {isLoading &&
          Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex flex-col space-y-3">
              <Skeleton className="h-[225px] w-full rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5" />
              </div>
            </div>
          ))}
      </div>
      <div ref={loaderRef} className="col-span-full">
        {!hasMore && news.length > 0 && (
          <p className="py-8 text-center text-muted-foreground">
            You've reached the end.
          </p>
        )}
      </div>
    </>
  );
}
