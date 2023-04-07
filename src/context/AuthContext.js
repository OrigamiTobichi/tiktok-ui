import { useContext, createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signInWithRedirect, signOut } from 'firebase/auth';
import { auth } from '~/firebase';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
    });
    return () => {
      console.log('unsubscribe');
      unsubscribe();
    };
  }, []);

  const logOut = () => {
    logOut(user);
  };

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return <AuthContext.Provider value={{ googleSignIn, user }}>{children}</AuthContext.Provider>;
}

const UserAuth = () => {
  return useContext(AuthContext);
};

export { UserAuth };
export default AuthContextProvider;
