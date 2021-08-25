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
    firebaseAuth.languageCode = 'es';
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

  function resetPassword(email){
    return firebaseAuth.sendPasswordResetEmail(email);
  }

  function updateEmail(email){
    return currentUser.updateEmail(email);
  }

  function updatePassword(password){
    return currentUser.updatePassword(password);
  }

const value = {
  currentUser,
  signup,
  login,
  logout,
  resetPassword,
  updateEmail,
  updatePassword
}

  return (
    <authContext.Provider value={ value }>
      { !loading && children }
    </authContext.Provider>
  );
}

export { useAuth, AuthProvider }
