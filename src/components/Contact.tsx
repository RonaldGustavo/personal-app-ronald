import { ReactNode } from 'react';
import { FaGithub } from 'react-icons/fa';

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
  const wa = contacts.find((c) => c.id === 'wa');
  const email = contacts.find((c) => c.id === 'email');
  let github = contacts.find((c) => c.id === 'github');
  if (github) {
    github = { ...github, icon: <FaGithub size={18} className="text-white" /> };
  }

  return (
    <div className="flex flex-col gap-2 text-gray-100 text-xs sm:text-sm mt-8 w-full max-w-xs">
      <div className="flex flex-row gap-4 w-full items-center">
        {wa && (
          <a
            key={wa.id}
            href={wa.href}
            target={wa.isMail ? '_self' : '_blank'}
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-green-400 transition-colors duration-200"
          >
            <div className="p-2 bg-white/10 rounded-full border border-white/20">
              {wa.icon}
            </div>
            <span className="font-medium tracking-wide whitespace-nowrap">{wa.label}</span>
          </a>
        )}
        {email && (
          <a
            key={email.id}
            href={email.href}
            target={email.isMail ? '_self' : '_blank'}
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-blue-400 transition-colors duration-200"
          >
            <div className="p-2 bg-white/10 rounded-full border border-white/20">
              {email.icon}
            </div>
            <span className="font-medium tracking-wide whitespace-nowrap">{email.label}</span>
          </a>
        )}
      </div>

      {github && (
        <div className="flex flex-row w-full justify-start mt-2">
          <a
            key={github.id}
            href={github.href}
            target={github.isMail ? '_self' : '_blank'}
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-pink-400 transition-colors duration-200"
          >
            <div className="p-2 bg-white/10 rounded-full border border-white/20">
              {github.icon}
            </div>
            <span className="font-medium tracking-wide whitespace-nowrap">{github.label}</span>
          </a>
        </div>
      )}
    </div>
  );
};

export default Contact;
