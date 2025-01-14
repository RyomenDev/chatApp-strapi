import { createContext, useState, useEffect, useContext } from "react";
import {
  onAuthStateChanged,
  signInWithRedirect,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase";

//create context
const AuthContext = createContext();
//provider context
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUSer] = useState("");
  const [loading, setLoading] = useState(true);

  //   signin with google
  const signInWithGoogle = async () => {
    try {
      await signInWithRedirect(auth, googleProvider);
      //   const result = await signInWithPopup(auth, googleProvider);
      //   const user = result.user;
      //   console.log(user);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  // signout from google
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const value = {
    currentUser,
    setCurrentUSer,
    signInWithGoogle,
    logout,
  };

  // set currentUser
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);

      setCurrentUSer(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={value}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
