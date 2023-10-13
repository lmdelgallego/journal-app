import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import LoginPage from "../LoginPage";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import {authSlice} from "../../../store/auth/authSlice";
import { MemoryRouter } from "react-router-dom";
import { notAuthenticatedState } from "../../../store/auth/__tests__/fixtures/authFixtures";

const mockStartGoogleLogin = vi.fn();
const mockStartLoginEmailPassword = vi.fn();

vi.mock('../../../store/auth/thunks', () => ({
  startGoogleLogin: () => mockStartGoogleLogin,
  startLoginEmailPassword: (email, password) => () => mockStartLoginEmailPassword(email, password)
}))

vi.mock('react-redux', async () => {
  const reactRedux = await vi.importActual('react-redux');
  return {
    ...reactRedux,
    useDispatch: () => (fn) => fn()
  }
});


const store = configureStore({
  reducer: {
    auth: authSlice.reducer
  },
  preloadedState: {
    auth: notAuthenticatedState
  }
});

describe('LoginPage', () => {

  beforeEach(() => {
    vi.clearAllMocks();
  });

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
  });

  test("should be able to login with email and password", () => {

    const formEmail = 'demo@google.com';
    const formPassword = 'password';

    render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginPage/>
        </MemoryRouter>
      </Provider>
    );

    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const loginForm = screen.getByLabelText('login-form');

    fireEvent.change(emailInput, { target: { value: formEmail } });
    fireEvent.change(passwordInput, { target: { value: formPassword } });
    fireEvent.submit(loginForm);

    const loginBtn = screen.getByLabelText('login-btn');
    fireEvent.click(loginBtn);
    expect(mockStartLoginEmailPassword).toHaveBeenCalled();
    expect(mockStartLoginEmailPassword).toHaveBeenCalledWith(formEmail, formPassword);

  });
});