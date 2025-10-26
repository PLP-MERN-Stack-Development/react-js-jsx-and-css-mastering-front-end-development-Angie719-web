// src/api/posts.js
const BASE_URL = 'https://jsonplaceholder.typicode.com';

/**
 * Fetches a paginated list of posts.
 * @param {number} page - The page number to fetch (1-indexed).
 * @param {number} limit - The number of items per page.
 * @returns {Promise<Array>} - The list of posts.
 */
export const fetchPosts = async (page = 1, limit = 10) => {
  const url = `${BASE_URL}/posts?_page=${page}&_limit=${limit}`;
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  // JSONPlaceholder doesn't return total count headers, 
  // but in a real API, you'd extract pagination info here.
  const posts = await response.json();
  return posts;
};