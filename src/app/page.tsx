import { Navbar } from '@/components';
import AOSInit from '@/components/AOSInit';
import { Home, Project } from '@/partials';

export default function Page() {
  return (
    <div className="bg-gradient-to-b from-[#0b0c10] to-black text-white min-h-screen">
      <AOSInit />
      <Navbar />
      <main>
        <section id="home" aria-label="Introduction">
          <Home />
        </section>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

        <section id="projects" aria-label="Projects">
          <Project />
        </section>
      </main>
    </div>
  );
}
