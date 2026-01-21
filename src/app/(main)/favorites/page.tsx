import { Heart } from "lucide-react";

export default function FavoritesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-4 font-headline text-3xl font-bold md:text-4xl">
          Favorites
        </h1>
        <p className="text-muted-foreground">
          Your favorite articles, teams, and players will appear here.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed border-muted bg-card p-12 text-center">
        <div className="rounded-full bg-primary/10 p-4">
          <Heart className="h-10 w-10 text-primary" />
        </div>
        <h2 className="text-xl font-semibold">Nothing to see here yet</h2>
        <p className="text-muted-foreground">
          Start adding your favorites to see them collected on this page.
        </p>
      </div>
    </div>
  );
}
