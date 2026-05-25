'use client';
import { TypeAnimation } from 'react-type-animation';

type IntroProps = {
  welcomeText: string;
  nameSequence: (string | number)[];
  descriptions: string[];
};

const Intro: React.FC<IntroProps> = ({ welcomeText, nameSequence, descriptions }) => {
  const descriptionSequence = descriptions.flatMap((d) => [d, 3000]);

  return (
    <div>
      <p className="text-base sm:text-lg text-purple-300 font-medium mb-3 tracking-wide">
        {welcomeText}
      </p>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
        <span className="block text-white mb-1">Hi, I&apos;m</span>
        <span className="gradient-text min-w-[16ch] inline-block">
          <TypeAnimation
            sequence={nameSequence}
            wrapper="span"
            cursor
            repeat={Infinity}
          />
        </span>
      </h1>

      <p className="text-sm sm:text-base text-gray-300 mt-4 min-h-[3.5rem] leading-relaxed">
        <TypeAnimation
          sequence={[400, ...descriptionSequence]}
          wrapper="span"
          cursor={false}
          repeat={Infinity}
          speed={70}
        />
      </p>
    </div>
  );
};

export default Intro;
