import Image from 'next/image';

interface ProfileProps {
  src: string;
  alt: string;
}

const Profile = ({ src, alt }: ProfileProps) => {
  return (
    <div
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      className="relative w-full max-w-[260px] sm:max-w-[320px] md:max-w-[400px] aspect-square float-animation"
    >
      <div className="absolute inset-0 rounded-3xl bg-purple-800/20 shadow-[0_4px_20px_rgba(88,28,135,0.3)] translate-x-2 translate-y-2 scale-[0.96] z-0" />
      <div className="absolute inset-0 rounded-3xl bg-purple-800/30 shadow-[0_8px_30px_rgba(88,28,135,0.4)] translate-x-4 translate-y-4 scale-[0.92] z-0" />
      <div className="relative rounded-3xl overflow-hidden border border-purple-500/60 bg-white/5 shadow-[0_10px_30px_rgba(128,90,213,0.4)] transition-transform duration-300 hover:scale-[1.02] z-10 w-full h-full">
        <Image src={src} alt={alt} fill className="object-cover" priority />
      </div>
    </div>
  );
};

export default Profile;
