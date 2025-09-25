import { ReactNode } from 'react';

type ContactItem = {
  id: string;
  href: string;
  icon: ReactNode;
  label: string;
  isMail?: boolean;
};

interface ContactProps {
  contacts?: ContactItem[];
}

const Contact = ({ contacts = [] }: ContactProps) => {
  return (
    <div className="flex flex-row sm:flex-row sm:items-center sm:gap-8 gap-4 text-gray-100 text-xs sm:text-sm mt-8">
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-8">
        {contacts.map((item) => (
          <a
            key={item.id}
            href={item.href}
            target={item.isMail ? '_self' : '_blank'}
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-pink-400 transition-colors duration-200"
          >
            <div className="p-2 bg-white/10 rounded-full border border-white/20">
              {item.icon}
            </div>
            <span className="font-medium tracking-wide">{item.label}</span>
          </a>
        ))}
      </div>

      <div className="flex items-center gap-2 animate-bounce">
        <span className="text-pink-400 text-xl">👈</span>
      </div>
    </div>
  );
};

export default Contact;
