
import type { NewsArticle, Match, AnalysisArticle, Cup } from './types';
import { PlaceHolderImages } from './placeholder-images';

const getImage = (id: string) => {
  const image = PlaceHolderImages.find(img => img.id === id);
  return { imageUrl: image?.imageUrl ?? `https://picsum.photos/seed/${id}/400/300`, imageHint: image?.imageHint ?? 'sports image' };
};

const mockTeams = {
  arsenal: { id: 't1', name: 'Arsenal', logoUrl: getImage('arsenal-logo').imageUrl },
  inter: { id: 't2', name: 'Inter Milan', logoUrl: getImage('inter-logo').imageUrl },
  barcelona: { id: 't3', name: 'Barcelona', logoUrl: getImage('barcelona-logo').imageUrl },
  slavia: { id: 't4', name: 'Slavia Prague', logoUrl: getImage('slavia-prague-logo').imageUrl },
  galatasaray: { id: 't5', name: 'Galatasaray', logoUrl: getImage('galatasaray-logo').imageUrl },
  atletico: { id: 't6', name: 'Atlético Madrid', logoUrl: getImage('atletico-madrid-logo').imageUrl },
  bayern: { id: 't7', name: 'Bayern Munich', logoUrl: getImage('bayern-logo').imageUrl },
  union_sg: { id: 't8', name: 'Union SG', logoUrl: getImage('union-sg-logo').imageUrl },
  newcastle: { id: 't9', name: 'Newcastle', logoUrl: getImage('newcastle-logo').imageUrl },
  psv: { id: 't10', name: 'PSV', logoUrl: getImage('psv-logo').imageUrl },
  marseille: { id: 't11', name: 'Marseille', logoUrl: getImage('marseille-logo').imageUrl },
  liverpool: { id: 't12', name: 'Liverpool', logoUrl: getImage('liverpool-logo').imageUrl },
  arsenal_w: { id: 't13', name: 'Arsenal W', logoUrl: getImage('arsenal-logo').imageUrl },
  man_utd_w: { id: 't14', name: 'Man Utd W', logoUrl: getImage('man-utd-logo').imageUrl },
  southampton: { id: 't15', name: 'Southampton', logoUrl: getImage('southampton-logo').imageUrl },
  sheffield: { id: 't16', name: 'Sheffield Utd', logoUrl: getImage('sheffield-logo').imageUrl },
};


const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\nSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.";

const mockBreakingNews: NewsArticle[] = [
  {
    id: 'bn1',
    slug: 'arsenal-seventh-heaven',
    title: 'أرسنال يفوز 3-1 على إنتر ميلان ويستمر في صدارة المجموعة',
    excerpt: 'في انتصار مهم، أظهر أرسنال قوة هجومية ليتغلب على إنتر ميلان في دوري أبطال أوروبا.',
    content: lorem,
    imageUrl: getImage('breaking-news-1').imageUrl,
    imageHint: getImage('breaking-news-1').imageHint,
    category: 'كرة القدم',
    publishedAt: '2026-01-20T22:00:00Z',
  },
  {
    id: 'bn2',
    slug: 'champions-league-preview-barca',
    title: 'مواجهات كبيرة في دوري الأبطال: برشلونة يواجه سلافيا براج',
    excerpt: 'تتجه الأنظار إلى المواجهات القوية في دوري أبطال أوروبا اليوم، وأبرزها لقاء برشلونة وسلافيا براج.',
    content: lorem,
    imageUrl: getImage('breaking-news-2').imageUrl,
    imageHint: getImage('breaking-news-2').imageHint,
    category: 'كرة القدم',
    publishedAt: '2026-01-21T09:00:00Z',
  },
  {
    id: 'bn3',
    slug: 'aus-open-2026',
    title: 'منافسات قوية في بطولة أستراليا المفتوحة للتنس',
    excerpt: 'تشهد بطولة أستراليا المفتوحة للتنس 2026 مواجهات مثيرة بين أبرز اللاعبين العالميين في عالم التنس.',
    content: lorem,
    imageUrl: getImage('breaking-news-3').imageUrl,
    imageHint: getImage('breaking-news-3').imageHint,
    category: 'تنس',
    publishedAt: '2026-01-21T08:00:00Z',
  },
];

const mockNews: NewsArticle[] = [
  {
    id: 'news1',
    slug: 'todays-matches-full-schedule',
    title: 'جدول مباريات اليوم مملوء بالمواجهات الأوروبية والعربية',
    excerpt: 'يوم كروي حافل بالمباريات الهامة في مختلف البطولات حول العالم.',
    content: lorem,
    imageUrl: getImage('latest-news-1').imageUrl,
    imageHint: getImage('latest-news-1').imageHint,
    category: 'كرة القدم',
    publishedAt: '2026-01-21T10:00:00Z',
  },
  {
    id: 'news2',
    slug: 'league-matches-broadcast',
    title: 'لقاءات قوية في بطولات الدوري ونقلها عبر القنوات المختلفة',
    excerpt: 'تابع أقوى المباريات المحلية والدولية مباشرة على القنوات الرياضية الرائدة.',
    content: lorem,
    imageUrl: getImage('latest-news-2').imageUrl,
    imageHint: getImage('latest-news-2').imageHint,
    category: 'بث تلفزيوني',
    publishedAt: '2026-01-21T09:30:00Z',
  },
  {
    id: 'news3',
    slug: 'bahrain-paralympic-support',
    title: 'دعم وتقدير لحضور البطولة البارالمبية في البحرين',
    excerpt: 'إشادة واسعة بالدعم المقدم للرياضات البارالمبية في البطولة الأخيرة التي أقيمت في البحرين.',
    content: lorem,
    imageUrl: getImage('latest-news-3').imageUrl,
    imageHint: getImage('latest-news-3').imageHint,
    category: 'رياضات بارالمبية',
    publishedAt: '2026-01-21T08:30:00Z',
  },
  {
    id: 'news4',
    slug: 'wpl-cricket-news',
    title: 'أخبار من Women’s Premier League في الكريكيت',
    excerpt: 'تغطية لآخر أخبار ومباريات دوري الكريكيت النسائي الممتاز.',
    content: lorem,
    imageUrl: getImage('latest-news-6').imageUrl,
    imageHint: getImage('latest-news-6').imageHint,
    category: 'كريكيت',
    publishedAt: '2026-01-21T07:30:00Z',
  },
  ...Array.from({ length: 15 }, (_, i) => ({
    id: `7-${i}`,
    slug: `generic-sports-news-${i+1}`,
    title: `More Sports News Title ${i+1}`,
    excerpt: `This is an excerpt for another piece of sports news, keeping you updated on all the latest happenings.`,
    content: lorem,
    imageUrl: `https://picsum.photos/seed/gn${i}/400/300`,
    imageHint: `sports news`,
    category: 'General',
    publishedAt: new Date(Date.parse('2026-01-20T12:00:00Z') - i * 3600000).toISOString(),
  })),
];


const mockMatches: Match[] = [
  { id: 'm-finished', team1: mockTeams.arsenal, team2: mockTeams.inter, score: [3, 1], time: 'FT', status: 'finished', cup: 'دوري أبطال أوروبا'},
  { id: 'm-live', team1: mockTeams.galatasaray, team2: mockTeams.atletico, score: [0, 0], time: "15'", status: 'live', cup: 'دوري أبطال أوروبا'},
  { id: 'm-upcoming-1', team1: mockTeams.bayern, team2: mockTeams.union_sg, score: null, time: '22:00', status: 'upcoming', cup: 'دوري أبطال أوروبا'},
  { id: 'm-upcoming-2', team1: mockTeams.marseille, team2: mockTeams.liverpool, score: null, time: '22:00', status: 'upcoming', cup: 'دوري أبطال أوروبا'},
  { id: 'm-upcoming-3', team1: mockTeams.slavia, team2: mockTeams.barcelona, score: null, time: '22:00', status: 'upcoming', cup: 'دوري أبطال أوروبا'},
  { id: 'm-upcoming-4', team1: mockTeams.newcastle, team2: mockTeams.psv, score: null, time: '22:00', status: 'upcoming', cup: 'دوري أبطال أوروبا'},
  { id: 'm-upcoming-5', team1: mockTeams.arsenal_w, team2: mockTeams.man_utd_w, score: null, time: '21:30', status: 'upcoming', cup: 'Women’s League Cup'},
  { id: 'm-upcoming-6', team1: mockTeams.southampton, team2: mockTeams.sheffield, score: null, time: '21:45', status: 'upcoming', cup: 'Championship'},
];

const mockAnalysis: AnalysisArticle[] = [
    {
        id: 'a1',
        title: 'لماذا فاز أرسنال على إنتر؟ تحليل تكتيكي',
        author: 'خبير تكتيكي',
        excerpt: 'تحليل معمق للعناصر التكتيكية الثلاثة التي منحت أرسنال الفوز: الضغط العالي، استغلال الأخطاء، ودقة التمرير.',
        content: lorem,
        imageUrl: getImage('analysis-1').imageUrl,
        imageHint: getImage('analysis-1').imageHint,
        type: 'expert',
        publishedAt: '2026-01-21T07:00:00Z',
    },
    {
        id: 'a2',
        title: 'تحليل AI: برشلونة ضد سلافيا براج - التكتيكات المتوقعة',
        author: 'AI Insights',
        excerpt: 'باستخدام نماذج الذكاء الاصطناعي، نستعرض احتمالات الفوز والتكتيكات التي قد يلجأ إليها كل فريق في مواجهة الليلة.',
        content: lorem,
        imageUrl: getImage('analysis-2').imageUrl,
        imageHint: getImage('analysis-2').imageHint,
        type: 'ai',
        publishedAt: '2026-01-21T09:00:00Z',
    },
     {
        id: 'a3',
        title: 'أداء ميررا أندريفا: قوة المنافسة في التنس',
        author: 'خبير تنس',
        excerpt: 'قراءة في أداء اللاعبة الشابة ميررا أندريفا في بطولة أستراليا المفتوحة وما يعكسه من قوة المنافسة.',
        content: lorem,
        imageUrl: getImage('breaking-news-3').imageUrl,
        imageHint: getImage('breaking-news-3').imageHint,
        type: 'expert',
        publishedAt: '2026-01-21T11:00:00Z',
    },
];

const mockCups: Cup[] = [
    { id: 'c1', name: 'دوري أبطال أوروبا', country: 'أوروبا', logoUrl: getImage('cup-logo-2').imageUrl },
    { id: 'c2', name: 'Women\'s League Cup', country: 'إنجلترا', logoUrl: getImage('cup-logo-1').imageUrl },
    { id: 'c3', name: 'Championship', country: 'إنجلترا', logoUrl: getImage('cup-logo-3').imageUrl },
    { id: 'c4', name: 'كأس العالم', country: 'عالمي', logoUrl: getImage('cup-logo-4').imageUrl },
];

// Simulate network delay
const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export async function getBreakingNews(): Promise<NewsArticle[]> {
  await delay(200);
  return mockBreakingNews;
}

export async function getLatestNews(options: { limit: number }): Promise<NewsArticle[]> {
  await delay(300);
  return mockNews.slice(0, options.limit);
}

export async function getAllNews(): Promise<NewsArticle[]> {
  await delay(300);
  return mockNews;
}

export async function getNewsPaginated(offset: number, limit: number): Promise<NewsArticle[]> {
  await delay(300);
  return mockNews.slice(offset, offset + limit);
}

export async function getNewsBySlug(slug: string): Promise<NewsArticle | undefined> {
  await delay(200);
  const allNews = [...mockNews, ...mockBreakingNews];
  return allNews.find(article => article.slug === slug);
}

export async function getRelatedNews(slug: string): Promise<NewsArticle[]> {
    await delay(300);
    // simple mock: return 3 other articles
    return mockNews.filter(a => a.slug !== slug).slice(0, 3);
}

export async function getTodayMatches(): Promise<Match[]> {
  await delay(400);
  return mockMatches.filter(m => m.status === 'live' || m.status === 'upcoming');
}

export async function getMatchesByStatus(status: Match['status']): Promise<Match[]> {
    await delay(400);
    return mockMatches.filter(m => m.status === status);
}

export async function getAnalysisPreview(options: { limit: number }): Promise<AnalysisArticle[]> {
  await delay(500);
  return mockAnalysis.slice(0, options.limit);
}

export async function getAllAnalysis(): Promise<AnalysisArticle[]> {
  await delay(500);
  return mockAnalysis;
}

export async function getCups(): Promise<Cup[]> {
    await delay(300);
    return mockCups;
}
