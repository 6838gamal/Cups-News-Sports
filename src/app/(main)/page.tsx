
import { getAnalysisPreview, getBreakingNews, getLatestNews, getTodayMatches } from "@/lib/api";
import { BreakingNews } from "@/components/news/breaking-news";
import { NewsCard } from "@/components/news/news-card";
import { MatchMiniCard } from "@/components/matches/match-mini-card";
import { AnalysisCard } from "@/components/analysis/analysis-card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function HomePage() {
  const [breakingNews, latestNews, todayMatches, analysisPreview] = await Promise.all([
    getBreakingNews(),
    getLatestNews({ limit: 6 }),
    getTodayMatches(),
    getAnalysisPreview({ limit: 3 }),
  ]);

  return (
    <div className="space-y-8">
      {/* Breaking News Section */}
      <section>
        <BreakingNews articles={breakingNews} />
      </section>

      {/* Today's Matches Section */}
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-2xl font-bold">Today's Matches</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea>
            <div className="flex space-x-4 pb-4">
              {todayMatches.length > 0 ? (
                todayMatches.map((match) => (
                  <div key={match.id} className="min-w-[300px] max-w-[300px]">
                    <MatchMiniCard match={match} />
                  </div>
                ))
              ) : (
                <p className="w-full text-center text-muted-foreground">
                  No matches today.
                </p>
              )}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Latest News Section */}
      <Card>
        <CardHeader>
            <CardTitle className="font-headline text-2xl font-bold">Latest News</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latestNews.map((article) => (
                <NewsCard key={article.id} article={article} />
            ))}
            </div>
        </CardContent>
      </Card>
      
      {/* Analysis Section */}
      <Card>
        <CardHeader>
            <CardTitle className="font-headline text-2xl font-bold">Analysis</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {analysisPreview.map((article) => (
                <AnalysisCard key={article.id} article={article} />
            ))}
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
