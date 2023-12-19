// Intro.tsx
import { useRouter } from "next/router";
import Image from "next/image";

const Intro = (): JSX.Element => {
  const router = useRouter();

  const handleGetStartedClick = async () => {
    router.push("/login");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#ff8473]">
      <div className="text-center text-white">
        <Image
          src="/logo.png"
          alt="Intro"
          className="w-1/2 h-auto mb-4 mx-auto"
          height={350}
          width={350}
        />

        <h1 className="text-4xl mb-4 font-lucida-calligraphy">MoodScope</h1>
        <p className="text-lg mb-6 font-lucida-calligraphy">
          Welcome to MoodScope! Explore your emotions and enhance your
          well-being.
        </p>
        <button
          onClick={handleGetStartedClick}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 font-lucida-calligraphy"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Intro;
