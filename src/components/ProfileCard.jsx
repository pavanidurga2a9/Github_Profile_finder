import React from 'react';

const ProfileCard = ({ user }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="glass-panel rounded-3xl p-6 md:p-8 shadow-2xl mb-8 transform transition-all duration-300 hover:border-slate-700/50">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
        
        {/* Avatar Container */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-violet-500 rounded-full blur-md opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
          <img 
            src={user.avatar_url} 
            alt={`${user.name}'s avatar`}
            className="relative w-28 h-28 md:w-36 md:h-36 rounded-full object-cover border-2 border-slate-700"
          />
        </div>

        {/* Profile Info Details */}
        <div className="flex-1 text-center md:text-left space-y-4 w-full">
          <div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white">{user.name || user.login}</h1>
              <a 
                href={user.html_url} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 self-center md:self-start px-4 py-1.5 rounded-full text-xs font-semibold glass-card text-indigo-400 hover:bg-indigo-500 hover:text-white transition-all duration-200"
              >
                View Profile
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            <p className="text-indigo-400 font-medium text-sm md:text-base">@{user.login}</p>
          </div>

          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto md:mx-0">
            {user.bio || "This profile has no bio."}
          </p>

          {/* Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-800 text-sm text-slate-400">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="text-slate-500">📍 Location:</span>
              <span className="text-slate-200 font-medium">{user.location || 'Not Available'}</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="text-slate-500">🏢 Company:</span>
              <span className="text-slate-200 font-medium">{user.company || 'Not Available'}</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2 sm:col-span-2">
              <span className="text-slate-500">📅 Joined:</span>
              <span className="text-slate-200 font-medium">{formatDate(user.created_at)}</span>
            </div>
          </div>

          {/* Numbers Stats Grid */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-2">
            <div className="glass-card rounded-2xl p-3 text-center transition-all duration-300 hover:bg-slate-800/40">
              <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-0.5">Repos</span>
              <span className="text-lg md:text-xl font-bold text-white">{user.public_repos}</span>
            </div>
            <div className="glass-card rounded-2xl p-3 text-center transition-all duration-300 hover:bg-slate-800/40">
              <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-0.5">Followers</span>
              <span className="text-lg md:text-xl font-bold text-white">{user.followers}</span>
            </div>
            <div className="glass-card rounded-2xl p-3 text-center transition-all duration-300 hover:bg-slate-800/40">
              <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-0.5">Following</span>
              <span className="text-lg md:text-xl font-bold text-white">{user.following}</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
