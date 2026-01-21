
import { Users } from "lucide-react";

export default function TeamsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-4 font-headline text-3xl font-bold md:text-4xl">
          Teams
        </h1>
        <p className="text-muted-foreground">
          Explore all the teams.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed border-muted bg-card p-12 text-center">
        <div className="rounded-full bg-primary/10 p-4">
          <Users className="h-10 w-10 text-primary" />
        </div>
        <h2 className="text-xl font-semibold">Coming Soon</h2>
        <p className="text-muted-foreground">
          Team profiles will be available here.
        </p>
      </div>
    </div>
  );
}
