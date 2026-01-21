
import { getCups } from "@/lib/api";
import { CupCard } from "@/components/cups/cup-card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default async function CupsPage() {
  const cups = await getCups();
  const countries = [...new Set(cups.map((cup) => cup.country))];

  return (
    <div className="space-y-8">
      <div>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="font-headline text-3xl font-bold md:text-4xl">
              Cups & Tournaments
            </h1>
            <p className="mt-2 text-muted-foreground">
              Explore major sports competitions from around the world.
            </p>
          </div>
          <div className="w-full md:w-auto">
            <Select>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Filter by country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Countries</SelectItem>
                {countries.map((country) => (
                  <SelectItem key={country} value={country.toLowerCase()}>
                    {country}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {cups.map((cup) => (
          <CupCard key={cup.id} cup={cup} />
        ))}
      </div>
    </div>
  );
}
