# **App Name**: Cups News Sports

## Core Features:

- Breaking News Display: Display breaking news headlines fetched from `/api/v1/news?filter=breaking`.
- Latest News Cards: Display latest news in card format, fetching data from `/api/v1/news?limit=10`.
- Live Match Updates: Display live match scores and updates from `/api/v1/matches?filter=live`.
- AI-Powered Insights Generation: Tool to generate insightful sports analysis from `/api/v1/analysis?type=ai` using AI models.
- User Settings Management: Enable users to GET/PUT their settings via `/api/v1/users/{id}/settings` endpoint.
- Infinite Scroll for News: Implement infinite scrolling to load more news articles from `/api/v1/news?offset={offset}&limit=10`.
- Related News Recommendations: Suggest related news articles based on the current article's slug, fetching data from `/api/v1/news/{slug}/related`.

## Style Guidelines:

- Primary color: A vibrant blue (#29ABE2) to represent trust and reliability, essential for a news platform.
- Background color: Light gray (#F5F5F5) for a clean, readable interface that doesn't distract from the content.
- Accent color: Orange (#FF8C00) for highlighting important information and interactive elements.
- Headline font: 'Space Grotesk' (sans-serif) for headlines and short amounts of body text; body font: 'Inter' (sans-serif) for longer text.
- Note: currently only Google Fonts are supported.
- Use simple, clear icons to represent different sports and categories.
- Responsive layout with a persistent sidebar on desktop and bottom tabs on mobile for easy navigation.
- Subtle animations for loading content and transitioning between pages to enhance user experience.