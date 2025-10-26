// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import HomePage from './pages/HomePage';
import PostsPage from './pages/PostsPage';

function App() {
  return (
    <Layout>
      <Routes>
        {/* Task Manager component (HomePage) will live at the root path */}
        <Route path="/" element={<HomePage />} />
        
        {/* API Integration component (PostsPage) */}
        <Route path="/posts" element={<PostsPage />} />
        
        {/* Simple 404 Route */}
        <Route path="*" element={
          <div className="text-center p-10 bg-white dark:bg-gray-800 rounded-xl shadow-lg mt-10">
            <h2 className="text-3xl font-bold text-red-600 dark:text-red-400">404 - Page Not Found</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">The page you are looking for does not exist.</p>
          </div>
        } />
      </Routes>
    </Layout>
  );
}

export default App;