import { useState, useEffect, useReducer, act } from "react";
import { db } from "../firebase/config";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const initialState = {
  loading: null,
  error: null,
};

const insertReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { loading: true, error: null };
    case "ERROR":
      return { loading: false, error: action.payload };
    case "INSERT_DOC":
      return { loading: false, error: null };
    default:
      return state;
  }
};

export const useSetDocuments = (docCollection) => {
  const [response, dispatch] = useReducer(insertReducer, initialState);

  //deal with the memory leak
  const [canceled, setCanceled] = useState(false);

  const checkCanceledBeforeDispatch = () => {
    if (!canceled) {
      dispatch(action);
    }
  };

  const insertDocument = async (doc) => {
    try {
      checkCanceledBeforeDispatch({ type: "LOADING" });

      const newDocument = { ...document, createdAt: Timestamp.now() };

      const insertDocument = await addDoc(
        collection(db, docCollection),
        newDocument
      );

      checkCanceledBeforeDispatch({
        type: "INSERTED_DOC",
        payload: insertDocument,
      });
    } catch (error) {
      checkCanceledBeforeDispatch({ type: "ERROR", payload: error.message });
    }
  };

  useEffect(() => {
    return () => {
      setCanceled(true);
    };
  }, []);
  return insertDocument, response;
};
