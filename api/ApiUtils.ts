// Base API utilities with common functionality

const API_BASE_URL = 'http://localhost:5007/api';

/**
 * Generic GET request function
 * @param endpoint API endpoint path
 * @returns Promise with data of type T
 */
export async function apiGet<T>(endpoint: string): Promise<T> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    return await response.json() as T;
  } catch (error) {
    console.error(`Error fetching from ${endpoint}:`, error);
    throw error;
  }
}

/**
 * Generic POST request function
 * @param endpoint API endpoint path
 * @param data Data to send in the request body
 * @returns Promise with response data of type U
 */
export async function apiPost<T, U>(endpoint: string, data: T): Promise<U> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    return await response.json() as U;
  } catch (error) {
    console.error(`Error posting to ${endpoint}:`, error);
    throw error;
  }
}