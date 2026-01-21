
import { ClipboardList } from "lucide-react";

export default function StandingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-4 font-headline text-3xl font-bold md:text-4xl">
          Standings
        </h1>
        <p className="text-muted-foreground">
          League tables and team rankings.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed border-muted bg-card p-12 text-center">
        <div className="rounded-full bg-primary/10 p-4">
          <ClipboardList className="h-10 w-10 text-primary" />
        </div>
        <h2 className="text-xl font-semibold">Coming Soon</h2>
        <p className="text-muted-foreground">
          Standings will be available here.
        </p>
      </div>
    </div>
  );
}
