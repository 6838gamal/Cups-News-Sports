import Image from 'next/image';
import Link from 'next/link';
import type { Match } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '../ui/badge';

interface MatchMiniCardProps {
  match: Match;
}

export function MatchMiniCard({ match }: MatchMiniCardProps) {
  return (
    <Link href={`/matches/${match.id}`} className="block">
      <Card className="w-full transition-all hover:shadow-md hover:border-primary">
        <CardContent className="flex items-center justify-between p-3">
          <div className="flex flex-col items-center gap-2 w-1/3 text-center">
            <Image
              src={match.team1.logoUrl}
              alt={match.team1.name}
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
            <span className="text-xs font-medium truncate">{match.team1.name}</span>
          </div>

          <div className="flex flex-col items-center gap-1 text-center">
            {match.status === 'live' ? (
              <>
                <div className="text-xl font-bold">{`${match.score?.[0]} - ${match.score?.[1]}`}</div>
                <Badge variant="destructive" className="animate-pulse bg-accent text-accent-foreground px-1 h-5 text-xs">{match.time}</Badge>
              </>
            ) : match.status === 'upcoming' ? (
                <div className="text-lg font-bold">{match.time}</div>
            ) : (
                <div className="text-xl font-bold">{`${match.score?.[0]} - ${match.score?.[1]}`}</div>
            )}
            <span className="text-[10px] text-muted-foreground uppercase">{match.cup}</span>
          </div>

          <div className="flex flex-col items-center gap-2 w-1/3 text-center">
            <Image
              src={match.team2.logoUrl}
              alt={match.team2.name}
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
            <span className="text-xs font-medium truncate">{match.team2.name}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
