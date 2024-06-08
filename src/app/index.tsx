import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    
    router.push('/es');
  }, []);

  return null; 
};

export default Index;
