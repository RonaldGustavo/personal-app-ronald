export type ContactId = 'whatsapp' | 'email' | 'github';

export type ContactItem = {
  id: ContactId;
  href: string;
  label: string;
};

export type ProjectItem = {
  title: string;
  description: string;
  url: string;
  tech: string[];
};

export const NAV_ITEMS = ['Home', 'Projects'] as const;
export type NavItem = (typeof NAV_ITEMS)[number];

export const SKILLS_DATA: string[][] = [
  ['React', 'React Native'],
  ['Vue', 'Flutter'],
  ['Node.js'],
];

export const CONTACTS_DATA: ContactItem[] = [
  { id: 'whatsapp', href: 'https://wa.me/6281278541350', label: '+62 812-7854-1350' },
  { id: 'email', href: 'mailto:ronaldgustavo.rg@gmail.com', label: 'ronaldgustavo.rg@gmail.com' },
  { id: 'github', href: 'https://github.com/RonaldGustavo', label: 'RonaldGustavo' },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    title: 'Pokemon App',
    url: 'https://pokemon-app-next-six.vercel.app',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    description:
      'A modern, responsive Pokédex web app built with Next.js, Tailwind CSS, and TypeScript. Features client-side rendering, real-time Pokémon data from PokéAPI, search and filter functionality, and mobile-friendly design.',
  },
  {
    title: 'Movie App',
    url: 'https://movie-ronald.vercel.app',
    tech: ['React', 'JavaScript'],
    description:
      'Movie Search Website Built with React – Discover and Explore Movies Instantly.',
  },
  {
    title: '3D Animation',
    url: 'https://threejs-3-d-animation.vercel.app',
    tech: ['Three.js', 'JavaScript', 'Vite'],
    description:
      'A project showcasing 3D animation built using the Three.js library, vanilla JavaScript, and bundled with Vite.',
  },
  {
    title: 'Animelist App',
    url: 'https://animelist-nuxt-ts.vercel.app',
    tech: ['Nuxt 3', 'TypeScript', 'GraphQL'],
    description:
      'A modern and responsive Anime List web application built with Nuxt 3 and TypeScript, using GraphQL to fetch data efficiently from the AniList API.',
  },
  {
    title: 'Calculator App',
    url: 'https://angular-calculator-app-beta.vercel.app/calculator',
    tech: ['Angular 19', 'TypeScript'],
    description:
      'A modern and responsive Calculator Application built with Angular 19, featuring a clean UI and smooth user experience.',
  },
  {
    title: 'CMS TMDB',
    url: 'https://cms-tmdb-react.vercel.app',
    tech: ['React', 'TMDb API'],
    description:
      'A simple Content Management System (CMS) for viewing and managing movie and TV show data fetched from The Movie Database (TMDb) API.',
  },
];
