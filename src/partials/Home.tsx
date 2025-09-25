import { Contact, Intro, Profile, Skill } from '@/components';

interface HomeProps {
  welcomeText: string;
  nameSequence: (string | number)[];
  descriptions: string[];
  skillsData: string[][];
  contactsData: {
    id: string;
    href: string;
    icon: React.ReactNode;
    label: string;
    isMail: boolean;
  }[];
  profile: {
    src: string;
    alt: string;
  };
}

const Home: React.FC<HomeProps> = ({
  welcomeText,
  nameSequence,
  descriptions,
  skillsData,
  contactsData,
  profile,
}) => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 h-screen w-full px-8 md:px-16 pt-32 md:pt-0">
      <div className="flex items-center justify-center px-4 md:px-0">
        <div className="space-y-8 max-w-xl min-w-[16ch]">
          <Intro
            welcomeText={welcomeText}
            nameSequence={nameSequence}
            descriptions={descriptions}
          />

          <Skill skillsData={skillsData} />

          <Contact contacts={contactsData} />
        </div>
      </div>

      <div className="flex items-center justify-center px-4 md:px-0 mt-6 md:mt-0 floatX">
        <Profile src={profile.src} alt={profile.alt} />
      </div>
    </div>
  );
};

export default Home;
