// app.tsx
import '../styles/globals.css';
// App.tsx
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Intro from './intro';
import LoadingPage from './loading';
import Login from './login';

function App() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  // Logic to determine whether to show the loading page
  useEffect(() => {
    if (router.pathname === '/loading') {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [router.pathname]);

  // Render components based on the current route
  if (router.pathname === '/intro') {
    return <Intro />;
  }

  if (isLoading) {
    return <LoadingPage />;
  }

  if (router.pathname === '/login') {
    return <Login />;
  }

  return null;
}

export default App;
