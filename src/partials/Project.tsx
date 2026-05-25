'use client';
import { useState } from 'react';
import { PROJECTS_DATA } from '@/data';

const ChevronLeft = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRight = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

const Project = () => {
  const [current, setCurrent] = useState(0);
  const total = PROJECTS_DATA.length;
  const project = PROJECTS_DATA[current];

  const prev = () => setCurrent((c) => (c === 0 ? total - 1 : c - 1));
  const next = () => setCurrent((c) => (c === total - 1 ? 0 : c + 1));

  return (
    <div className="px-6 md:px-16 pt-16 pb-16">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <header className="mb-8" data-aos="fade-up">
          <p className="text-xs font-semibold tracking-[0.2em] text-purple-400 uppercase mb-2">
            Portfolio
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            My <span className="gradient-text">Projects</span>
          </h2>
        </header>

        {/* ── Mobile: card grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
          {PROJECTS_DATA.map((proj, i) => (
            <a
              key={proj.title}
              href={proj.url}
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-delay={i * 80}
              className="flex flex-col bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-purple-500/50 hover:bg-white/8 transition-all duration-200 group"
            >
              <h3 className="text-base font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                {proj.title}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed mb-4 line-clamp-3 flex-1">
                {proj.description}
              </p>
              <div className="flex flex-wrap gap-1 mb-3">
                {proj.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-purple-900/40 text-purple-300 px-2 py-0.5 rounded-full border border-purple-700/30"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <span className="text-xs text-purple-400 font-medium mt-auto">
                View Demo →
              </span>
            </a>
          ))}
        </div>

        {/* ── Desktop: carousel with iframe ── */}
        <div className="hidden md:block" data-aos="fade-up">
          <div className="grid grid-cols-[32%_68%] gap-8 min-h-[70vh]">
            {/* Info panel */}
            <div className="flex flex-col justify-center">
              <p className="text-sm text-gray-500 font-mono mb-4">
                {String(current + 1).padStart(2, '0')}&nbsp;/&nbsp;{String(total).padStart(2, '0')}
              </p>
              <h3 className="text-2xl font-bold gradient-text relative gradient-underline mb-6 w-fit">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-5">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-purple-900/40 text-purple-300 px-3 py-1 rounded-full border border-purple-700/30"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-purple-300 border border-purple-500/40 hover:border-purple-400 hover:bg-purple-500/10 rounded-lg px-4 py-2 transition-all duration-200 w-fit mb-8"
              >
                Visit Live Demo →
              </a>
              {/* Nav controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prev}
                  aria-label="Previous project"
                  className="bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
                >
                  <ChevronLeft />
                </button>
                <button
                  onClick={next}
                  aria-label="Next project"
                  className="bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
                >
                  <ChevronRight />
                </button>
              </div>
            </div>

            {/* iframe preview */}
            <div
              className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white"
              style={{ height: '70vh' }}
            >
              <iframe
                key={project.url}
                src={project.url}
                title={project.title}
                className="w-full h-full"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {PROJECTS_DATA.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to project ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? 'bg-purple-400 w-6'
                    : 'bg-white/30 hover:bg-white/50 w-2'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
