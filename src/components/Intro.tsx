import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { TypeAnimation } from 'react-type-animation';

type IntroProps = {
  welcomeText: string;
  nameSequence: (string | number)[];
  descriptions: string[];
};

const Intro: React.FC<IntroProps> = ({
  welcomeText,
  nameSequence,
  descriptions,
}) => {
  return (
    <div>
      <p className="text-base sm:text-lg md:text-xl text-purple-300 font-semibold mb-3 tracking-wide min-w-[16ch]">
        {welcomeText}
      </p>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight flex items-baseline gap-2">
        <span className="whitespace-nowrap">Hi&nbsp;I’m</span>
        <span className="text-pink-400 min-w-[16ch] inline-block align-baseline">
          <TypeAnimation
            sequence={nameSequence}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
          />
        </span>
      </h1>

      <p className="text-sm sm:text-base md:text-2xl text-gray-300 mt-4 min-w-[16ch] min-h-[65px]">
        <Typewriter
          words={descriptions}
          loop={1}
          cursor
          cursorStyle=""
          typeSpeed={16}
        />
      </p>
    </div>
  );
};

export default Intro;
