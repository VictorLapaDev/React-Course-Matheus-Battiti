import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateProfile
} from 'firebase/auth';
import { useState } from 'react';



export const useAuthentication = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);


    //cleanup
    //deal whith memory leaks
    const [cancelled, setCancelled] = useState(false);

    const auth = getAuth();

    function checkIfCancelled() {
        if (cancelled) {
            return;
        }
    }

    
}