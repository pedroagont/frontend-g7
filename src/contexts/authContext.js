import { useContext, useEffect, useState, createContext } from 'react';
import { firebaseAuth } from '../firebase';

const authContext = createContext();

function useAuth() {
  return useContext(authContext)
}

function AuthProvider({ children }) {
  const [ currentUser, setCurrentUser ] = useState();
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    return firebaseAuth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false);
    });
  }, []);

  function signup(email, password){
    return firebaseAuth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password){
    return firebaseAuth.signInWithEmailAndPassword(email, password);
  }

  function logout(){
    return firebaseAuth.signOut();
  }

  return (
    <authContext.Provider value={{ currentUser, signup, login, logout }}>
      { !loading && children }
    </authContext.Provider>
  );
}

export { useAuth, AuthProvider }
