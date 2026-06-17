import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import ProfileCard from './components/ProfileCard';
import RepoGrid from './components/RepoGrid';
import Loader from './components/Loader';

function App() {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchGitHubData = async (username) => {
    const trimmedUsername = username.trim();
    
    // Check 1: Handle Empty Input Constraint
    if (!trimmedUsername) {
      setError('Please fill out the field before initiating scan.');
      setUser(null);
      setRepos([]);
      return;
    }

    setLoading(true);
    setError(null);

    // Dynamic config injection using optional environment keys
    const headers = {};
    if (import.meta.env.VITE_GITHUB_TOKEN) {
      headers.Authorization = `token ${import.meta.env.VITE_GITHUB_TOKEN}`;
    }

    try {
      // Parallel API calls initialization to prevent thread blocks
      const userPromise = axios.get(`https://api.github.com/users/${trimmedUsername}`, { headers });
      const reposPromise = axios.get(`https://api.github.com/users/${trimmedUsername}/repos?sort=created&per_page=6`, { headers });

      const [userResponse, reposResponse] = await Promise.all([userPromise, reposPromise]);

      setUser(userResponse.data);
      setRepos(reposResponse.data);
    } catch (err) {
      setUser(null);
      setRepos([]);
      
      // Check 2 & 3: Handle Invalid User and Network Failures
      if (err.response && err.response.status === 404) {
        setError('GitHub handle not found. Please double-check spelling and try again.');
      } else if (!err.response) {
        setError('Network interruption detected. Check your internet pipeline connection.');
      } else {
        setError('An unexpected anomaly occurred while collecting server data.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 animate-gradient px-4 py-12 md:py-20 flex flex-col items-center">
      <div className="w-full max-w-4xl mx-auto flex-1">
        
        {/* Animated Brand Header */}
        <header className="text-center mb-10 space-y-2">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-indigo-400">
            GitSpy
          </h1>
          <p className="text-sm font-medium text-indigo-400/80 uppercase tracking-widest">
            GitHub Infrastructure Profile Finder
          </p>
        </header>

        <SearchBar onSearch={fetchGitHubData} />

        {/* Global UI Feedback Engine */}
        <main className="mt-6">
          {loading && <Loader />}

          {error && (
            <div className="w-full max-w-2xl mx-auto border border-red-500/20 bg-red-950/20 text-red-300 rounded-2xl p-4 text-center text-sm font-medium backdrop-blur-md">
              ⚠️ {error}
            </div>
          )}

          {!loading && !error && user && (
            <div className="animate-fadeIn space-y-2">
              <ProfileCard user={user} />
              <RepoGrid repos={repos} />
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
