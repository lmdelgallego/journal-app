import { beforeEach, describe, expect, test, vi } from "vitest";
import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { startNewNote } from "../journalThunks";
import { addNewEmptyNote, setActiveNote } from "../journalSlice";



vi.mock("firebase/firestore/lite");
const emptyNoteData = {
  title: '',
  body: '',
  date: expect.any(Number),
  imageUrls: [],
  id: 'ABC'
};
describe('JournalThunks', () => {

  const dispatch = vi.fn();
  const getState = vi.fn();


  beforeEach(() => {
    vi.clearAllMocks();
  })

  test('should add new note ', async () => {
    const uid = '123';

    getState.mockReturnValue({ auth: { uid } })
    collection.mockResolvedValue({
      collection: 'ref-collection'
    });
    doc.mockResolvedValue({
      id: 'ABC',
    });

    await startNewNote()(dispatch, getState);
    expect(collection).toHaveBeenCalledWith(undefined,'journalApp', uid, 'notes');
    expect(doc).toHaveBeenCalledWith({
      collection: 'ref-collection'
    });
    expect(dispatch).toBeCalledTimes(3);
    expect(dispatch).toBeCalledWith(addNewEmptyNote(emptyNoteData));
    expect(dispatch).toBeCalledWith(setActiveNote(emptyNoteData));
  });
});