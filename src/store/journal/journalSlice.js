import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
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
    clearNotesLogout: (state) => {
      state.isSaving = false;
      state.notes = [];
      state.active = null;
      state.saveMessage = '';

    },
    deleteNoteById: (state, action) => {
      state.isSaving = false;
      state.notes = state.notes.filter(note => note.id !== action.payload);
      state.active = null;
      state.saveMessage = '';
    }
  }
});

export const {
  addNewEmptyNote,
  clearNotesLogout,
  deleteNoteById,
  savingNewNote,
  setActiveNote,
  setImagesToNote,
  setNotes,
  setSaving,
  updateNote,
} = journalSlice.actions;

export default journalSlice.reducer;