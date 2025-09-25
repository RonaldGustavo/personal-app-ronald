import React, { useState } from 'react';

interface ProjectItem {
  title: string;
  description: string;
  url: string;
}

interface ProjectProps {
  projects: ProjectItem[];
}

const Project: React.FC<ProjectProps> = ({ projects }) => {
  const [current, setCurrent] = useState(0);
  const total = projects.length;

  const prev = () => setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  const next = () => setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));

  return (
    <section className="w-screen h-screen bg-black flex justify-center relative overflow-hidden px-6 md:px-16 pt-24 md:pt-28">
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white rounded-full p-3 shadow-lg backdrop-blur"
        aria-label="Sebelumnya"
      >
        <svg
          width="32"
          height="32"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <div className="w-full h-full max-w-6xl grid grid-cols-1 md:grid-cols-[30%_70%] gap-6">
        <div className="flex flex-col items-start justify-center px-2 md:px-6">
          <h2 className="text-white text-xl md:text-2xl font-bold modern-title relative after-gradient-underline mb-2">
            {projects[current].title}
          </h2>
          <p className="text-gray-300 text-sm md:text-base mt-2 max-w-md">
            {projects[current].description}
          </p>
        </div>

        <div className="flex items-center justify-center w-full h-full">
          <div className="w-full h-[75vh] md:h-[85vh] rounded-xl overflow-hidden shadow-2xl border-2 border-white/10 bg-white">
            <iframe
              src={projects[current].url}
              title={projects[current].title}
              className="w-full h-full"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white rounded-full p-3 shadow-lg backdrop-blur"
        aria-label="Selanjutnya"
      >
        <svg
          width="32"
          height="32"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
};

export default Project;
