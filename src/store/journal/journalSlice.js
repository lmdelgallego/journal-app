import { createSlice } from '@reduxjs/toolkit';

const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    isSaving: false,
    saveMessage: '',
    notes: [],
    active: null,
    // active: {
    //   id: 'ABC123',
    //   title: 'Hola',
    //   body: 'Mundo',
    //   date: new Date().getTime(),
    //   imageUrls: ['https://res.cloudinary.com/dkrcosw87/image/upload/v1631000000/notes/ABC123.jpg']
    // }
  },
  reducers: {
    savingNewNote: (state) => {
      state.isSaving = true;
      state.saveMessage = 'Creating new note';
    },
    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },
    setActiveNote: (state, action) => {
      state.active = action.payload;
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    setSaving: (state) => {
      state.isSaving = true;
    },
    updateNote: (state, action) => {},
    deleteNoteById: (state, action) => {}
  }
});

export const {
  savingNewNote,
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNoteById
} = journalSlice.actions;

export default journalSlice.reducer;