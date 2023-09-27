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
      state.saveMessage = '';
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    setSaving: (state) => {
      state.isSaving = true;
      state.saveMessage = '';
    },
    updateNote: (state, action) => {
      state.isSaving = false;
      const { id, ...note } = action.payload;
      const noteIndex = state.notes.findIndex(note => note.id === id);
      if(noteIndex !== -1) {
        state.notes[noteIndex] = {
          ...state.notes[noteIndex],
          ...note
        }
      }
      state.saveMessage = `Note "${action.payload.title}" was updated correctly`;
    },
    setImagesToNote: (state, action) => {
      state.isSaving = false;
      state.active.imageUrls = [...state.active.imageUrls, ...action.payload];
    },
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
  deleteNoteById,
  setImagesToNote
} = journalSlice.actions;

export default journalSlice.reducer;