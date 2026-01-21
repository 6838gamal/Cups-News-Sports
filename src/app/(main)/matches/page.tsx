
import { getMatchesByStatus } from "@/lib/api";
import { MatchCard } from "@/components/matches/match-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default async function MatchesPage() {
  const [liveMatches, upcomingMatches, finishedMatches] = await Promise.all([
    getMatchesByStatus("live"),
    getMatchesByStatus("upcoming"),
    getMatchesByStatus("finished"),
  ]);

  return (
    <div className="space-y-8">
       <div>
        <h1 className="mb-4 font-headline text-3xl font-bold md:text-4xl">
          Matches
        </h1>
        <p className="text-muted-foreground">
          Follow live games, check out today's schedule, and review results.
        </p>
      </div>
      <Tabs defaultValue="live" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="live">Live</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="finished">Finished</TabsTrigger>
        </TabsList>
        <TabsContent value="live" className="mt-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {liveMatches.length > 0 ? (
              liveMatches.map((match) => (
                <MatchCard key={match.id} match={match} />
              ))
            ) : (
              <p className="col-span-full text-center text-muted-foreground">
                No live matches at the moment.
              </p>
            )}
          </div>
        </TabsContent>
        <TabsContent value="upcoming" className="mt-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {upcomingMatches.length > 0 ? (
              upcomingMatches.map((match) => (
                <MatchCard key={match.id} match={match} />
              ))
            ) : (
              <p className="col-span-full text-center text-muted-foreground">
                No upcoming matches scheduled.
              </p>
            )}
          </div>
        </TabsContent>
        <TabsContent value="finished" className="mt-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {finishedMatches.length > 0 ? (
              finishedMatches.map((match) => (
                <MatchCard key={match.id} match={match} />
              ))
            ) : (
              <p className="col-span-full text-center text-muted-foreground">
                No finished matches to display.
              </p>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
