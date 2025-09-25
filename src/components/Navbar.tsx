import { useState, useEffect } from 'react';

interface NavbarProps {
  brand: string;
  menuItems: string[];
  resumePath: string;
  resumeFileName?: string;
}

const Navbar = ({
  brand,
  menuItems,
  resumePath,
  resumeFileName = 'resume.pdf',
}: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(menuItems[0] || '');

  useEffect(() => {
    const updateActiveMenu = () => {
      const currentHash = window.location.hash.replace('#', '');
      const matchedMenu = menuItems.find(
        (item) => item.toLowerCase() === currentHash.toLowerCase()
      );
      if (matchedMenu) {
        setActiveMenu(matchedMenu);
      }
    };

    updateActiveMenu();

    window.addEventListener('hashchange', updateActiveMenu);

    return () => {
      window.removeEventListener('hashchange', updateActiveMenu);
    };
  }, [menuItems]);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = resumeFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0b0c10]/80 backdrop-blur-md px-6 md:px-14 py-4 md:py-6">
        <div className="flex items-center justify-between w-full">
          <h1
            data-aos="fade-right"
            className="modern-title text-white text-xl md:text-2xl font-bold"
          >
            {brand}
          </h1>

          <div className="hidden md:flex items-center gap-10 mx-auto">
            <ul className="flex justify-center space-x-8 font-medium">
              {menuItems.map((item) => (
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
                      activeMenu === item ? 'text-white' : 'hover:text-blue-400'
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

          {/* Mobile Menu Toggle */}
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

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-[64px] left-0 right-0 bg-[#0b0c10]/95 py-4 shadow-lg z-40 flex flex-col items-center space-y-4">
          <ul className="flex flex-col items-center space-y-2 font-medium">
            {menuItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => {
                    setActiveMenu(item);
                    setIsMenuOpen(false);
                  }}
                  className={`transition-colors font-semibold ${
                    activeMenu === item ? 'text-white' : 'hover:text-pink-400'
                  }`}
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
  );
};

export default Navbar;
