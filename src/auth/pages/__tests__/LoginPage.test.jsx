import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import LoginPage from "../LoginPage";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import {authSlice} from "../../../store/auth/authSlice";
import { MemoryRouter } from "react-router-dom";
import { notAuthenticatedState } from "../../../store/auth/__tests__/fixtures/authFixtures";
import { startGoogleLogin } from "../../../store/auth/thunks";

const mockStartGoogleLogin = vi.fn();

vi.mock('../../../store/auth/thunks', () => ({
  startGoogleLogin: () => mockStartGoogleLogin
}))


const store = configureStore({
  reducer: {
    auth: authSlice.reducer
  },
  preloadedState: {
    auth: notAuthenticatedState
  }
});

describe('LoginPage', () => {
  test('should render', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage/>
        </MemoryRouter>
      </Provider>
    )
    expect(screen.getAllByText('Login').length).toBeGreaterThan(1)
  });

  test("should be able to login with google", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage/>
        </MemoryRouter>
      </Provider>
    )
    const googleBtn = screen.getByLabelText('google-btn')
    fireEvent.click(googleBtn);
    expect(mockStartGoogleLogin).toHaveBeenCalled()
  })
});