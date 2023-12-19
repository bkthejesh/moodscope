// LoadingPage.tsx
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const LoadingPage: React.FC = () => {
  const router = useRouter();

  // Simulate some asynchronous operation (e.g., fetching initial data)
  useEffect(() => {
    const fetchData = async () => {
      // Simulate a 5-second delay
      await new Promise((resolve) => setTimeout(resolve, 5000));

      // Redirect to the login page after the delay
      router.push('/login');
    };

    fetchData();
  }, [router]);

  const emojis = ['😊', '🥺', '😁'];

  return (
    <div className="flex items-center justify-center h-screen bg-[#ff8473]">
      <div className="text-center text-white">
        <h1 className="text-6xl font-lucida-calligraphy mb-6">
          Loading...
        </h1>
        <div className="text-4xl">
          {emojis.map((emoji, index) => (
            <div
              key={index}
              className={`inline-block m-0 mr-4 animate-bounce`}
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              {emoji}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
