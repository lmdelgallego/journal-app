import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote } from "./journalSlice";

export const startNewNote = () => async ( dispatch, getState ) => {

  dispatch(savingNewNote())

  const { uid } = getState().auth;

  const newNote = {
    title: '',
    body: '',
    date: new Date().getTime(),
    imageUrls: []
  };

  const collectionRef = await collection(FirebaseDB,'journalApp', uid, 'notes');
  const docRef = await doc(collectionRef);
  await setDoc(docRef, newNote);
  newNote.id = docRef.id;
  console.log({newNote});
  // dispatch
  dispatch(addNewEmptyNote(newNote))
  dispatch(setActiveNote(newNote))
  // dispatch
};