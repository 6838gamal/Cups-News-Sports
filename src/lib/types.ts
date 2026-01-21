
export interface Team {
  id: string;
  name: string;
  logoUrl: string;
}

export interface Match {
  id: string;
  team1: Team;
  team2: Team;
  score: [number, number] | null;
  time: string;
  status: 'live' | 'upcoming' | 'finished';
  cup: string;
}

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  imageUrl: string;
  imageHint: string;
  category: string;
  publishedAt: string;
}

export interface AnalysisArticle {
  id: string;
  title: string;
  author: string;
  excerpt: string;
  content?: string;
  imageUrl: string;
  imageHint: string;
  type: 'expert' | 'ai';
  publishedAt: string;
}

export interface Cup {
  id: string;
  name: string;
  country: string;
  logoUrl: string;
}
