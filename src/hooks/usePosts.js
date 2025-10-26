// src/hooks/usePosts.js
import { useState, useEffect, useCallback } from 'react';
import { fetchPosts } from '../api/posts';

const ITEMS_PER_PAGE = 10;

/**
 * Custom hook for fetching and managing posts with pagination and search.
 */
export const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [hasMore, setHasMore] = useState(true);

  // Fetch function using useCallback to prevent unnecessary re-creation
  const loadPosts = useCallback(async (pageToLoad, isNewSearch = false) => {
    setLoading(true);
    setError(null);
    try {
      // API call to fetch posts for the current page
      const newPosts = await fetchPosts(pageToLoad, ITEMS_PER_PAGE);
      
      // If it's a new search or the first load, replace posts. Otherwise, append.
      if (isNewSearch || pageToLoad === 1) {
        setPosts(newPosts);
      } else {
        setPosts(prevPosts => [...prevPosts, ...newPosts]);
      }

      // Check if there might be more posts. (Simple check: if we get less than limit)
      setHasMore(newPosts.length === ITEMS_PER_PAGE);
      setPage(pageToLoad);

    } catch (err) {
      setError('Failed to fetch posts. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []); // Empty dependency array means this function is created once

  // Initial load or on search reset
  useEffect(() => {
    // Only load page 1 when the component mounts or the page state is reset
    if (page === 1) {
        loadPosts(1, true); 
    }
  }, [loadPosts]); 

  // Function to load the next page (for infinite scrolling)
  const loadNextPage = () => {
    if (!loading && hasMore) {
      loadPosts(page + 1);
    }
  };

  // Filter logic (simulated client-side filtering since JSONPlaceholder search is basic)
  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    post.body.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return {
    posts: filteredPosts,
    loading,
    error,
    searchQuery,
    setSearchQuery,
    loadNextPage,
    hasMore,
    // Note: A real search feature would re-fetch from the API, 
    // but here we filter the loaded set to simulate the search feature.
  };
};