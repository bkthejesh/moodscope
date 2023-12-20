import React from 'react';
import Image from 'next/image';
const Login = () => {
  return (
    <div className="flex items-end justify-start h-screen">
      <div className="relative w-full h-full overflow-hidden flex">
        <div className="w-3/5 h-full bg-[#ff8473] rounded-r-full overflow-hidden relative flex flex-col items-start justify-end pr-2 pb-2"
          style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%, 0 0)', }}
        >
          <div className="w-48 h-48 mb-2">
            <Image src="/logo.png" alt="Logo" width={256} height={128} />
          </div>
          <p className="text-2xl mb-2 font-lucida-calligraphy text-left"> 
            MoodScope
          </p>
        </div>
        <div className="w-3/5 p-8 flex items-center justify-center bg-white">
          <div className="text-[#ff8473]">
            <h1 className="text-4xl mb-5 font-lucida-calligraphy text-black">
              MoodScope
            </h1>
            <form>
              <button type="submit" className="bg-[#608DFF] text-white py-2 px-10 rounded-full hover:bg-blue-600 flex items-center">
                Login with 
                <Image src="/icon _google_.svg" alt="Google icon" width={25} height={25} className="ml-2"/>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
