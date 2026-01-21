
import { Logo } from "@/components/shared/logo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <div className="text-center space-y-4">
        <div className="inline-block p-4 bg-card rounded-full shadow-md">
            <Logo />
        </div>
        <h1 className="font-headline text-3xl font-bold md:text-4xl">
          About Cups News
        </h1>
        <p className="text-lg text-muted-foreground">
          Your daily source for sports news and updates.
        </p>
      </div>
      <Card>
        <CardHeader>
            <CardTitle>Our Mission</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground space-y-4 text-base md:text-lg">
            <p>
                Cups News is a modern, fast, and beautiful app designed to keep you up-to-date with everything happening in the world of sports. 
                From breaking news and live match scores to in-depth tactical analysis, we have everything a sports fan needs.
            </p>
            <p>
                This application is built with Next.js, React, Tailwind CSS, and powered by Google AI for insightful analysis.
            </p>
        </CardContent>
      </Card>
    </div>
  );
}
