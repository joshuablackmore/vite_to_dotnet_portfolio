import { apiGet } from './ApiUtils';
import type { HomeData } from './types';

/**
 * Get home page data
 * @returns Promise with home page data
 */
export async function getHomeData(): Promise<HomeData> {
  try {
    return await apiGet<HomeData>('/public/home');
  } catch (error) {
    console.error('Error fetching home data:', error);
    throw error;
  }
}