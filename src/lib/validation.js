export const validateAuthFields = ({ email, password, name = null }) => {
  const errors = {};

  if (!email || !email.includes('@')) {
    errors.email = 'Please enter a valid email.';
  }

  if (!password || password.length < 6) {
    errors.password = 'Password must be at least 6 characters.';
  }

  if (name !== null && (!name.trim() || name.length < 2)) {
    errors.name = 'Full name is required.';
  }

  return errors;
};

export const mapFirebaseError = (code) => {
  switch (code) {
    case 'auth/email-already-in-use':
      return { field: 'email', message: 'Email is already registered.' };
    case 'auth/weak-password':
      return { field: 'password', message: 'Password is too weak.' };
    case 'auth/user-not-found':
      return { field: 'email', message: 'No account found.' };
    case 'auth/wrong-password':
      return { field: 'password', message: 'Incorrect password.' };
    case 'auth/invalid-email':
      return { field: 'email', message: 'Invalid email format.' };
    default:
      return { field: 'general', message: 'Something went wrong. Please try again.' };
  }
};
