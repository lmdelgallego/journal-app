import { describe, expect, test } from "vitest";
import {authSlice, login, logout} from "../authSlice";
import { authenticatedState, demoUser, initialState, notAuthenticatedState } from "./fixtures/authFixtures";

describe("authSlice", () => {
  test("should return the initial state", () => {
    const state = authSlice.reducer(initialState, {})
    expect(authSlice.name).toBe('auth');
    expect(state).toEqual(initialState);
  });

  test("should handle login", () => {
    const state = authSlice.reducer(initialState, login(demoUser))
    expect(state).toEqual(authenticatedState)
  });

  test("should handle logout", () => {
    const state = authSlice.reducer(authenticatedState, logout())
    expect(state).toEqual(notAuthenticatedState)
  });

  test("should handle logout withArguments", () => {
    const state = authSlice.reducer(authenticatedState, logout({errorMessage: 'error_message'}))
    expect(state).toEqual({
      ...notAuthenticatedState,
      errorMessage: 'error_message'
    })
  });


})