import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ProtectedRoute({ children }) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      // 🚫 If no token, go to login
      router.push('/auth/login');
    }
  }, [router]);

  return children;
}
