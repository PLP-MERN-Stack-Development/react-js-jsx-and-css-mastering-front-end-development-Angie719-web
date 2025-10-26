// src/pages/PostsPage.jsx
import React, { useRef, useCallback } from 'react';
import Card from '../ui/Card';
import { usePosts } from '../hooks/usePosts';

const PostCard = ({ post }) => (
  <Card className="hover:shadow-indigo-500/50 hover:shadow-2xl transition duration-300">
    <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
      {post.title}
    </h3>
    <p className="text-gray-700 dark:text-gray-300 line-clamp-3">
      {post.body}
    </p>
    <p className="mt-3 text-sm font-medium text-gray-500 dark:text-gray-400">
      User ID: {post.userId}
    </p>
  </Card>
);

const PostsPage = () => {
  const { 
    posts, 
    loading, 
    error, 
    searchQuery, 
    setSearchQuery, 
    loadNextPage,
    hasMore
  } = usePosts();

  // 💡 Intersection Observer for Infinite Scrolling
  const observer = useRef();
  const lastPostElementRef = useCallback(node => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        loadNextPage();
      }
    }, { threshold: 0.5 }); // Trigger when 50% of the element is visible
    
    if (node) observer.current.observe(node);
  }, [loading, hasMore, loadNextPage]);


  return (
    <div className="pt-8">
      <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-8 text-center">
        API Data Integration (Posts)
      </h2>
      
      {/* Search Feature */}
      <div className="mb-8 max-w-xl mx-auto">
        <input
          type="text"
          placeholder="Search posts by title or body..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg shadow-md 
                     focus:ring-indigo-500 focus:border-indigo-500 
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
        />
      </div>

      {/* Error State */}
      {error && (
        <div className="text-center p-6 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-lg shadow-lg max-w-md mx-auto mb-8">
          <p className="font-bold">Error:</p>
          <p>{error}</p>
        </div>
      )}

      {/* List / Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => {
          // Attach ref to the last post for infinite scrolling
          if (posts.length === index + 1) {
            return (
              <div ref={lastPostElementRef} key={post.id}>
                <PostCard post={post} />
              </div>
            );
          }
          return <PostCard key={post.id} post={post} />;
        })}
      </div>
      
      {/* Loading State */}
      {loading && (
        <div className="text-center py-10">
          <svg className="animate-spin h-8 w-8 text-indigo-600 dark:text-indigo-400 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Loading more posts...</p>
        </div>
      )}

      {/* End of results message */}
      {!hasMore && !loading && (
        <p className="text-center text-gray-500 dark:text-gray-400 mt-8">
          You've reached the end of the loaded posts.
        </p>
      )}
    </div>
  );
};

export default PostsPage;