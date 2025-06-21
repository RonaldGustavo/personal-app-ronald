'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import { TypeAnimation } from 'react-type-animation';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('Home');

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/assets/document/cv-resume-ronaldgustavo.pdf';
    link.download = 'RonaldG-resume-cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.location.hash = 'home';
  }, []);

  return (
    <div>
      <div className="bg-gradient-to-b from-[#0b0c10] to-black text-white font-sans min-h-screen">
        {/* //NOTE - Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0b0c10]/80 backdrop-blur-md px-6 md:px-14 py-4 md:py-6">
          <div className="flex items-center justify-between w-full">
            <h1
              data-aos="fade-right"
              className="modern-title text-white text-xl md:text-2xl font-bold"
            >
              RonaldG.
            </h1>
            <div className="hidden md:flex items-center gap-10 mx-auto">
              <ul className="flex justify-center space-x-8 font-medium">
                {['Home', 'Projects', 'Contact'].map((item) => (
                  <li
                    key={item}
                    className={`relative font-bold transform transition-transform ${
                      activeMenu === item
                        ? 'scale-115 after-gradient-underline text-white'
                        : 'hover:text-blue-400'
                    }`}
                  >
                    <a
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setActiveMenu(item)}
                      className={`transition-colors duration-200 ${
                        activeMenu === item
                          ? 'text-white'
                          : 'hover:text-blue-400'
                      }`}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden md:block">
              <button
                onClick={handleDownload}
                className="border-2 border-white px-6 py-2 rounded-md hover:bg-white hover:text-black transition-colors duration-200 font-bold"
              >
                My Resume
              </button>
            </div>

            <button
              className="md:hidden focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* //NOTE - Hero Section */}
        <div className="grid md:grid-cols-2 grid-cols-1 h-screen w-full px-8 md:px-16 pt-32 md:pt-0">
          <div className="flex items-center justify-center px-4 md:px-0">
            <div className="space-y-8 max-w-xl min-w-[16ch]">
              <div>
                <p className="text-base sm:text-lg md:text-xl text-purple-300 font-semibold mb-3 tracking-wide min-w-[16ch]">
                  Welcome to my portfolio
                </p>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight flex items-baseline gap-2">
                  <span className="whitespace-nowrap">Hi&nbsp;I’m</span>
                  <span className="text-pink-400 min-w-[16ch] inline-block align-baseline">
                    <TypeAnimation
                      sequence={['Ronald Gustavo', 1000, 'Developer', 1000]}
                      wrapper="span"
                      cursor={true}
                      repeat={Infinity}
                    />
                  </span>
                </h1>

                <p className="text-sm sm:text-base md:text-2xl text-gray-300 mt-4 min-w-[16ch] min-h-[65px]">
                  <Typewriter
                    words={[
                      'Frontend Engineer focused on building elegant and high-performance apps for Android, iOS, and the web.',
                    ]}
                    loop={1}
                    cursor
                    cursorStyle=""
                    typeSpeed={16}
                  />
                </p>
              </div>

              {/* //NOTE - Skills */}
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-pink-400 mb-3">
                  Skills
                </h3>
                <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-4 shadow-lg w-full max-w-xl">
                  <ul className="flex justify-between text-gray-300 text-sm sm:text-base md:text-lg px-4 space-x-6">
                    <div className="space-y-1">
                      <li className="relative pl-5 before:content-['⚡'] before:absolute before:left-0">
                        React
                      </li>
                      <li className="relative pl-5 before:content-['⚡'] before:absolute before:left-0">
                        React Native
                      </li>
                    </div>
                    <div className="space-y-1">
                      <li className="relative pl-5 before:content-['⚡'] before:absolute before:left-0">
                        Vue
                      </li>
                      <li className="relative pl-5 before:content-['⚡'] before:absolute before:left-0">
                        Flutter
                      </li>
                    </div>
                    <div className="space-y-1">
                      <li className="relative pl-5 before:content-['⚡'] before:absolute before:left-0">
                        Node.js
                      </li>
                    </div>
                  </ul>
                </div>
              </div>

              {/* //NOTE - Contact */}
              <div className="flex flex-row sm:flex-row sm:items-center sm:gap-8 gap-4 text-gray-100 text-xs sm:text-sm mt-8">
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-8">
                  <a
                    href="https://wa.me/6281278541350"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 hover:text-pink-400 transition-colors duration-200"
                  >
                    <div className="p-2 bg-white/10 rounded-full border border-white/20">
                      <FaWhatsapp size={16} className="text-green-500" />
                    </div>
                    <span className="font-medium tracking-wide">
                      +62 812-7854-1350
                    </span>
                  </a>

                  <div className="flex items-center space-x-2">
                    <div className="p-2 bg-white/10 rounded-full border border-white/20">
                      <FaEnvelope size={16} className="text-white" />
                    </div>
                    <a
                      href="mailto:ronaldgustavo.rg@gmail.com"
                      className="font-medium tracking-wide hover:text-pink-400 transition-colors duration-200"
                    >
                      ronaldgustavo.rg@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2 animate-bounce">
                  <span className="text-pink-400 text-xl">👈</span>
                </div>
              </div>
            </div>
          </div>

          {/* //NOTE - right side */}
          <div className="flex items-center justify-center px-4 md:px-0 mt-6 md:mt-0 floatX">
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              className="relative w-full max-w-[250px] sm:max-w-[300px] md:max-w-[400px] aspect-square"
            >
              <div className="absolute inset-0 rounded-3xl bg-purple-800/20 shadow-[0_4px_20px_rgba(88,28,135,0.3)] translate-x-2 translate-y-2 scale-[0.96] z-0 backdrop-blur-sm" />
              <div className="absolute inset-0 rounded-3xl bg-purple-800/30 shadow-[0_8px_30px_rgba(88,28,135,0.4)] translate-x-4 translate-y-4 scale-[0.92] z-0 backdrop-blur-sm" />

              <div className="relative rounded-3xl overflow-hidden border border-purple-500 bg-white/5 shadow-[0_10px_30px_rgba(128,90,213,0.4)] transition-transform duration-300 hover:scale-[1.03] z-10 w-full h-full">
                <Image
                  src="/assets/image/profile-ronald.webp"
                  alt="Profile Ronald"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* //NOTE - Mobile dropdown */}
        {isMenuOpen && (
          <div className="md:hidden fixed top-[64px] left-0 right-0 bg-[#0b0c10]/95 py-4 shadow-lg z-40 flex flex-col items-center space-y-4">
            <ul className="flex flex-col items-center space-y-2 font-medium">
              {['Home', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => {
                      setActiveMenu(item);
                      setIsMenuOpen(false);
                    }}
                    className="hover:text-pink-400 transition-colors font-semibold"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <button
              onClick={handleDownload}
              className="border-2 border-white px-6 py-2 rounded-md hover:bg-white hover:text-black transition-colors duration-200 font-bold"
            >
              My Resume
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
