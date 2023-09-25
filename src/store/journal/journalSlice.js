import { createSlice } from '@reduxjs/toolkit';

const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    isSaving: true,
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
    addNewEmptyNote: (state, action) => {
      state.notes.push({
        id: action.payload,
        title: '',
        body: '',
        date: new Date().getTime(),
        imageUrls: []
      });
    },
    setActiveNote: (state, action) => {},
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

export const { addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNote, deleteNoteById } = journalSlice.actions;

export default journalSlice.reducer;