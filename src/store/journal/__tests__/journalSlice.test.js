import { describe, expect, test } from "vitest";
import {journalSlice, savingNewNote} from "../journalSlice";
import { initialState, savingNewNoteState } from "./fixtures/journalFixtures";

describe("journalSlice", () => {

  test("should return the initial state", () => {
    const state = journalSlice.reducer(initialState, {});
    expect(journalSlice.name).toBe('journal');
    expect(state).toEqual(initialState);
  });

  test("should handle savingNewNote", () => {
    const state = journalSlice.reducer(initialState, savingNewNote());
    expect(state).toEqual(savingNewNoteState)
  });
})