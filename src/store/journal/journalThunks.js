import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes, setSaving, updateNote } from "./journalSlice";
import { loadNotes } from "../../journal/helpers";

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

export const startLoadingNotes = () => async ( dispatch, getState ) => {
  const { uid } = getState().auth;
  if(!uid) throw new Error('uid is required');
  const notes = await loadNotes(uid);
  dispatch(setNotes(notes));
};

export const startSaveNote = () => async ( dispatch, getState ) => {
  dispatch(setSaving());
  const { uid } = getState().auth;
  const { active: activeNote } = getState().journal;
  if(!uid) throw new Error('uid is required');
  const noteToFirestore = {...activeNote};
  delete noteToFirestore.id;
  const docRef = await doc(FirebaseDB, 'journalApp', uid, 'notes', activeNote.id);
  await setDoc(docRef, noteToFirestore, { merge: true });
  dispatch(updateNote(activeNote))
  // dispatch(setActiveNote({
  //   ...note,
  //   id
  // }));
};