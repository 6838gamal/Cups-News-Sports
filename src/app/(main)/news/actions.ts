
"use server";

import { getNewsPaginated } from "@/lib/api";

export async function fetchNews(offset: number, limit: number) {
  try {
    const news = await getNewsPaginated(offset, limit);
    return news;
  } catch (error) {
    console.error("Failed to fetch news:", error);
    return [];
  }
}
