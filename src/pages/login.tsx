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
              <div className="mb-4">
                <label className="block text-lg mb-1 font-calibri text-black">
                  Name
                </label>
                <input
                  type="text"
                  className="border bg-gray-200 p-2 rounded-full w-full"
                  placeholder="Enter name"
                />    
              </div>
              <div className="mb-4">
              <label className="block text-lg mb-1 font-calibri text-black">
                  Date of birth
                </label>
                <input
                  type="text"
                  className="border bg-gray-200 p-2 rounded-full w-full"
                  placeholder="Enter date of birth"
                />    
              </div>
              <div className="mb-4">
              <label className="block text-lg mb-1 font-calibri text-black">
                  Gender
                </label>
                <input
                  type="text"
                  className="border bg-gray-200 p-2 rounded-full w-full"
                  placeholder="Enter gender"
                />    
              </div>

              <button type="submit" className="bg-[#608DFF] text-white py-2 px-4 rounded-full hover:bg-blue-600">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
