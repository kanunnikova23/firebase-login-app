import { useState } from 'react';
import { useRouter } from 'next/router';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { validateAuthFields, mapFirebaseError } from '@/lib/validation';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});
  const router = useRouter();

  const handleSignup = async () => {
    const errors = validateAuthFields({ email, password, name });
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, {
        displayName: name,
      });
      router.push('/home');
    } catch (error) {
      const { field, message } = mapFirebaseError(error.code);
      setFieldErrors((prev) => ({ ...prev, [field]: message }));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-green-200 to-emerald-300">
      <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-md border border-emerald-200">
        <h1 className="text-3xl font-extrabold text-emerald-800 mb-6 text-center">Sign Up</h1>

        {fieldErrors.general && (
          <p className="text-sm text-red-600 text-center mb-4">{fieldErrors.general}</p>
        )}

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setFieldErrors((prev) => ({ ...prev, name: '' }));
          }}
          className={`mb-1 w-full border px-4 py-2 rounded-md focus:ring-2 text-gray-800 placeholder-gray-500 ${
            fieldErrors.name ? 'border-red-400' : 'border-emerald-300'
          }`}
          required
        />
        {fieldErrors.name && (
          <p className="text-sm text-red-500 mb-2">{fieldErrors.name}</p>
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setFieldErrors((prev) => ({ ...prev, email: '' }));
          }}
          className={`mb-1 w-full border px-4 py-2 rounded-md focus:ring-2 text-gray-800 placeholder-gray-500 ${
            fieldErrors.email ? 'border-red-400' : 'border-emerald-300'
          }`}
          required
        />
        {fieldErrors.email && (
          <p className="text-sm text-red-500 mb-2">{fieldErrors.email}</p>
        )}

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setFieldErrors((prev) => ({ ...prev, password: '' }));
          }}
          className={`mb-1 w-full border px-4 py-2 rounded-md focus:ring-2 text-gray-800 placeholder-gray-500 ${
            fieldErrors.password ? 'border-red-400' : 'border-emerald-300'
          }`}
          required
          minLength={6}
        />
        {fieldErrors.password && (
          <p className="text-sm text-red-500 mb-4">{fieldErrors.password}</p>
        )}

        <button
          onClick={handleSignup}
          className="bg-emerald-600 text-white py-2 px-4 rounded-md w-full hover:bg-emerald-700 transition font-semibold shadow-md"
        >
          Create Account
        </button>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <a href="/login" className="text-emerald-700 font-medium hover:underline">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
}
// This file handles the signup functionality, including form validation and Firebase authentication.