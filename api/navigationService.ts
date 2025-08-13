import type { NavLink, NavigationContent } from './types';
import { apiGet } from './ApiUtils';

/**
 * Get all navigation links
 * @returns Promise with navigation data
 */
export async function getNavLinks(): Promise<NavLink[]> {
  try {
    const response = await apiGet<NavigationContent>('/public/navigation');
    return response.links;
  } catch (error) {
    console.error('Error fetching navigation:', error);
    // Return fallback navigation if API fails
    return [
      { name: 'Home', url: '/home' },
      { name: 'My Music', url: '/music/my' },
      { name: 'What I\'m Listening To', url: '/music/listening' },
      { name: 'Engineering', url: '/engineering' }
    ];
  }
}