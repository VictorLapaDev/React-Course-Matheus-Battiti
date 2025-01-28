import { useEffect, useState } from "react";
import { auth } from "../firebase/config"; // Import the initialized auth
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

export const useAuthentication = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  //cleanup
  const [cancelled, setCancelled] = useState(false);

  function checkIfCancelled() {
    if (cancelled) {
      return;
    }
  }

  //register
  const createUser = async (
    email: string,
    password: string,
    displayName: string
  ) => {
    checkIfCancelled();

    setLoading(true);
    setError(null);

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(user, { displayName });

      

      return user;
    } catch (error) {

      console.log(error.message);

      let systemErrorMessage;
      if (error.message.includes("password")) {
        systemErrorMessage = "A senha precisa conter no mínimo 6 caracteres";
      } else if (error.message.includes("email-already-in-use")) {
        systemErrorMessage = "O email já está em uso";
      } else {
        systemErrorMessage = "Ocorreu um erro inesperado";
      }

      setError(systemErrorMessage);
    }
    finally {
      setLoading(false);
    }

  };

  //logout
  const logout = () => {

    checkIfCancelled();

    signOut(auth);
  }


  //login
  const login = async (email: string, password: string) => {

    checkIfCancelled();

    setLoading(true);
    setError(null);
    
    try{
      await signInWithEmailAndPassword(auth, email, password);
    }
    catch(error) {
      console.log(error.message);

      let systemErrorMessage;
      if (error.message.includes("user-not-found")) {
        systemErrorMessage = "Usuário não encontrado";
      } else if (error.message.includes("invalid-credential")) {
        systemErrorMessage = "Credencial inválida, verifique o email e a senha";
      } else if(error.message.includes("invalid-email")) {
        systemErrorMessage = "Email inválido";
      }
       else {
        systemErrorMessage = "Ocorreu um erro inesperado";
      }

      setError(systemErrorMessage);

    }
    finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    return () => {
      setCancelled(true);
    };
  }, []);

  return {
    auth,
    createUser,
    error,
    loading,
    logout,
    login
  };
};
