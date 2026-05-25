import { Contact, Intro, Profile, Skill } from '@/components';
import { CONTACTS_DATA, SKILLS_DATA } from '@/data';

const Home = () => {
  return (
    <div className="min-h-dvh w-full px-6 md:px-16 pt-20 pb-10 md:h-dvh md:pt-0 md:pb-0 md:flex md:items-center">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 grid-cols-1 w-full gap-6 md:gap-12">
        {/* Text content – appears below image on mobile, left on desktop */}
        <div className="flex items-center justify-center order-2 md:order-1">
          <div className="space-y-8 w-full max-w-xl" data-aos="fade-right">
            <Intro
              welcomeText="Welcome to my portfolio"
              nameSequence={['Ronald Gustavo', 1000, 'Developer', 1000]}
              descriptions={[
                'Frontend Engineer focused on building elegant and high-performance apps for Android, iOS, and the web.',
              ]}
            />
            <Skill skillsData={SKILLS_DATA} />
            <Contact contacts={CONTACTS_DATA} />
          </div>
        </div>

        {/* Profile image – appears on top on mobile, right on desktop */}
        <div
          className="flex items-center justify-center order-1 md:order-2"
          data-aos="fade-left"
        >
          <Profile
            src="/assets/image/profile-ronald.webp"
            alt="Ronald Gustavo – Frontend Engineer"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
