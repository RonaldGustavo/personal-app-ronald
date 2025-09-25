'use client';
import { useEffect } from 'react';
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Home, Navbar } from '@/partials';

export default function Page() {
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

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.location.hash = 'home';
  }, []);

  return (
    <div>
      <div className="bg-gradient-to-b from-[#0b0c10] to-black text-white font-sans min-h-screen">
        <Navbar
          brand="RonaldG."
          menuItems={['Home', 'Projects', 'Contact']}
          resumePath="/assets/document/cv-resume-ronaldgustavo.pdf"
          resumeFileName="RonaldG-resume-cv.pdf"
        />

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
      </div>
    </div>
  );
}
