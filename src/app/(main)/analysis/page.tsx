
import { getAllAnalysis } from "@/lib/api";
import { AnalysisCard } from "@/components/analysis/analysis-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AiInsightGenerator } from "@/components/analysis/ai-insight-generator";
import { BrainCircuit, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function AnalysisPage() {
  const allAnalysis = await getAllAnalysis();
  const expertArticles = allAnalysis.filter((a) => a.type === "expert");
  const aiArticles = allAnalysis.filter((a) => a.type === "ai");

  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-4 font-headline text-3xl font-bold md:text-4xl">
          Sports Analysis
        </h1>
        <p className="text-muted-foreground">
          Deep dives, tactical breakdowns, and AI-powered predictions.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BrainCircuit className="h-6 w-6 text-primary" />
            <span>Generate Your Own AI Insights</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <AiInsightGenerator />
        </CardContent>
      </Card>

      <Tabs defaultValue="expert" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="expert">
            <User className="mr-2 h-4 w-4" />
            Expert Analysis
          </TabsTrigger>
          <TabsTrigger value="ai">
            <BrainCircuit className="mr-2 h-4 w-4" />
            AI Insights
          </TabsTrigger>
        </TabsList>
        <TabsContent value="expert" className="mt-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {expertArticles.map((article) => (
              <AnalysisCard key={article.id} article={article} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="ai" className="mt-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {aiArticles.map((article) => (
              <AnalysisCard key={article.id} article={article} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
