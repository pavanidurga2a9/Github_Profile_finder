import React from 'react';

const RepoGrid = ({ repos }) => {
  if (!repos || repos.length === 0) return null;

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold tracking-tight text-white pl-1 flex items-center gap-2">
        <span>✨ Latest Repositories</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {repos.map((repo) => (
          <a 
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            className="group glass-panel rounded-2xl p-5 block transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-950/10"
          >
            <div className="flex flex-col h-full justify-between space-y-3">
              <div>
                <h3 className="font-bold text-base text-slate-100 group-hover:text-indigo-400 transition-colors duration-200 break-words">
                  {repo.name}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2 mt-1 leading-relaxed">
                  {repo.description || "No repository description provided."}
                </p>
              </div>

              {/* Repo Stats Footnote */}
              <div className="flex items-center gap-4 text-xs font-medium text-slate-400 pt-2 border-t border-slate-900">
                <div className="flex items-center gap-1">
                  <span className="text-amber-400">⭐</span>
                  <span>{repo.stargazers_count}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-blue-400">🍴</span>
                  <span>{repo.forks_count}</span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default RepoGrid;
