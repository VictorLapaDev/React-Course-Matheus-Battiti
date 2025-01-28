import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import {
    doc,
    getDoc
} from "firebase/firestore";

export const useFetchDocument = (
  docCollection: string,
  id: string
) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  // deal with memory leak
  const [cancelled, setCancelled] = useState(false);

  useEffect(() => {
    async function loadDocument() {
      if (cancelled) return;

      setLoading(true);

        try{

            const docRef = await doc(db, docCollection, id)
            const  docSnap = await getDoc(docRef);

            setDocument(docSnap.data())

        }catch(error){
            console.log(error)
            setError(error.message)
        }
        finally{
            setLoading(false)
        }

    }

    loadDocument();
  }, [docCollection, id]);

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return { document, error, loading };
};
