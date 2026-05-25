import { FaWhatsapp, FaEnvelope, FaGithub } from 'react-icons/fa';
import type { ContactItem, ContactId } from '@/data';

const ICON_CONFIG: Record<
  ContactId,
  { icon: React.ReactNode; hoverClass: string }
> = {
  whatsapp: {
    icon: <FaWhatsapp size={16} />,
    hoverClass: 'hover:text-green-400 hover:border-green-400/40',
  },
  email: {
    icon: <FaEnvelope size={16} />,
    hoverClass: 'hover:text-blue-400 hover:border-blue-400/40',
  },
  github: {
    icon: <FaGithub size={16} />,
    hoverClass: 'hover:text-purple-400 hover:border-purple-400/40',
  },
};

const isExternal = (href: string) =>
  !href.startsWith('mailto:') && !href.startsWith('tel:');

interface ContactProps {
  contacts?: ContactItem[];
}

const Contact = ({ contacts = [] }: ContactProps) => {
  return (
    <div className="flex flex-col gap-2 text-gray-300 text-xs sm:text-sm">
      {contacts.map((contact) => {
        const config = ICON_CONFIG[contact.id];
        return (
          <a
            key={contact.id}
            href={contact.href}
            target={isExternal(contact.href) ? '_blank' : '_self'}
            rel="noopener noreferrer"
            className={`flex items-center gap-3 w-fit transition-colors duration-200 group ${config.hoverClass}`}
          >
            <div className="p-2 bg-white/10 rounded-full border border-white/20 transition-colors duration-200 group-hover:bg-white/15">
              {config.icon}
            </div>
            <span className="font-medium tracking-wide truncate max-w-[200px] sm:max-w-xs">
              {contact.label}
            </span>
          </a>
        );
      })}
    </div>
  );
};

export default Contact;
