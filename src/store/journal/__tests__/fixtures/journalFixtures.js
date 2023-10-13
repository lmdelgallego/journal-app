export const initialState = {
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
};

export const savingNewNoteState = {
  ...initialState,
  isSaving: true,
  saveMessage: 'Creating new note'
}