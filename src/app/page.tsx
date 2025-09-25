'use client';
import { useEffect, useState } from 'react';
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Home, Project } from '@/partials';
import { Navbar } from '@/components';

export default function Page() {
  const [activeHash, setActiveHash] = useState<string>('home');

  const skillsData = [
    ['React', 'React Native'],
    ['Vue', 'Flutter'],
    ['Node.js'],
  ];

  const contactsData = [
    {
      id: 'whatsapp',
      href: 'https://wa.me/6281278541350',
      icon: <FaWhatsapp size={16} className="text-green-500" />,
      label: '+62 812-7854-1350',
      isMail: false,
    },
    {
      id: 'email',
      href: 'mailto:ronaldgustavo.rg@gmail.com',
      icon: <FaEnvelope size={16} className="text-white" />,
      label: 'ronaldgustavo.rg@gmail.com',
      isMail: true,
    },
  ];

  const projects = [
    {
      title: 'Pokemon App',
      url: 'https://pokemon-app-next-six.vercel.app',
      description:
        'A modern, responsive Pokédex web app built with Next.js, Tailwind CSS, and TypeScript. Features client-side rendering, real-time Pokémon data from PokéAPI, search and filter functionality, and mobile-friendly design.',
    },
    {
      title: 'Movie App',
      url: 'https://movie-ronald.vercel.app',
      description:
        'Movie Search Website Built with React – Discover and Explore Movies Instantly',
    },
    {
      title: '3D Animation',
      url: 'https://threejs-3-d-animation.vercel.app',
      description:
        'A project showcasing 3D animation built using the Three.js library, vanilla javascript, and built with Vite.',
    },
    {
      title: 'Animelist App',
      url: 'https://animelist-nuxt-ts.vercel.app',
      description:
        'A modern and responsive Anime List web application built with Nuxt 3 and TypeScript, using GraphQL to fetch data efficiently from a public anime API (e.g., AniList).',
    },
    {
      title: 'Calculator App',
      url: 'https://angular-calculator-app-beta.vercel.app/calculator',
      description:
        'A modern and responsive Calculator Application built with Angular 19, featuring a clean UI and smooth user experience. Designed to handle basic arithmetic operations with precision and styled for a minimal yet elegant look.',
    },
    {
      title: 'CMS TMDB',
      url: 'https://cms-tmdb-react.vercel.app',
      description:
        'This project is a simple Content Management System (CMS) designed for viewing and managing movie and TV show data fetched from The Movie Database (TMDb) API using React framework',
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    window.location.hash = 'home';
    setActiveHash('home');

    const handleHashChange = () => {
      setActiveHash(window.location.hash.replace('#', ''));
    };
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#0b0c10] to-black text-white font-sans min-h-screen">
      <Navbar
        brand="RonaldG."
        menuItems={['Home', 'Projects', 'Contact']}
        resumePath="/assets/document/cv-resume-cv.pdf"
        resumeFileName="RonaldG-resume-cv.pdf"
      />

      {activeHash === 'home' && (
        <Home
          welcomeText="Welcome to my portfolio"
          nameSequence={['Ronald Gustavo', 1000, 'Developer', 1000]}
          descriptions={[
            'Frontend Engineer focused on building elegant and high-performance apps for Android, iOS, and the web.',
          ]}
          skillsData={skillsData}
          contactsData={contactsData}
          profile={{
            src: '/assets/image/profile-ronald.webp',
            alt: 'Profile Ronald',
          }}
        />
      )}

      {activeHash === 'projects' && <Project projects={projects} />}
    </div>
  );
}
