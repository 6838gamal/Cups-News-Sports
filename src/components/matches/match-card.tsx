
import Image from 'next/image';
import Link from 'next/link';
import type { Match } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

interface MatchCardProps {
  match: Match;
}

export function MatchCard({ match }: MatchCardProps) {
  return (
    <Card className="w-full transition-all hover:shadow-md">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">{match.cup}</CardTitle>
            {match.status === 'live' ? (
              <Badge variant="destructive" className="animate-pulse bg-accent text-accent-foreground">{match.time}</Badge>
            ) : (
                <span className="text-xs text-muted-foreground">{match.status === 'upcoming' ? match.time : 'Finished'}</span>
            )}
        </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 w-2/5">
                <Image
                src={match.team1.logoUrl}
                alt={match.team1.name}
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
                />
                <span className="font-semibold truncate">{match.team1.name}</span>
            </div>

            <div className="text-2xl font-bold text-center">
                {match.status === 'upcoming' ? 'vs' : `${match.score?.[0] ?? 0} - ${match.score?.[1] ?? 0}`}
            </div>

            <div className="flex items-center gap-3 w-2/5 justify-end">
                <span className="font-semibold truncate text-right">{match.team2.name}</span>
                <Image
                src={match.team2.logoUrl}
                alt={match.team2.name}
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
                />
            </div>
        </div>
        <div className="mt-4 flex justify-end">
            <Button variant="ghost" size="sm" asChild>
                <Link href={`/matches/${match.id}`}>
                    Match Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
        </div>
      </CardContent>
    </Card>
  );
}
