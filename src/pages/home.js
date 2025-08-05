import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';

export default function HomePage() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        router.push('/login');
      } else {
        setUser(currentUser);
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-green-200 to-emerald-300">
      <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl text-center w-full max-w-md">
        {user && (
          <>
            <h1 className="text-3xl font-bold text-emerald-800 mb-4">
              Hey, {user.displayName || 'User'}! 👋
            </h1>
            <p className="text-gray-700 mb-6">You're successfully logged in.</p>
            <button
              onClick={handleLogout}
              className="bg-emerald-600 text-white py-2 px-4 rounded-md hover:bg-emerald-700 transition font-semibold shadow-md"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
}
// This file handles the home page functionality after login, including user greeting and logout.