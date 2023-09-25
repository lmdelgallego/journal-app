import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";

export const startNewNote = () => async ( dispatch, getState ) => {

  const { uid } = getState().auth;

  const newNote = {
    title: '',
    body: '',
    date: new Date().getTime(),
    imageUrls: []
  };

  const collectionRef = await collection(FirebaseDB,'journalApp', uid, 'notes');
  const docRef = await doc(collectionRef);
  // const docRef = await doc(  );
  // const setDocRes = await setDoc(docRef, newNote);
  // const docRef = await doc(FirebaseDB, 'journalApp', uid, 'journal', 'notes');
  const setDocRes = await setDoc(docRef, newNote);

  console.log({docRef, setDocRes });
  // dispatch
  // dispatch(setActiveNote);
  // dispatch
};