import { beforeEach, describe, expect, test, vi } from "vitest";
import { checkAuth, startCreateUser, startGoogleLogin, startLoginEmailPassword } from "../thunks";
import { checkingCredentials, login, logout } from "../authSlice";
import { demoUser } from "./fixtures/authFixtures";
import { loginWithEmail, singInWithGoogle, singUpWithEmail } from "../../../firebase/providers";

vi.mock("../../../firebase/providers")
describe("thunksAuth", () => {

  const dispatch = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  })

  test("should be invoque checkingCredentials", async () => {
    await checkAuth()(dispatch);
    expect(dispatch).toBeCalledWith(checkingCredentials());
  });

  test("should be invoque startGoogleLogin and login successfully", async () => {
    const loginData = {
      ok: true,
      ...demoUser
    }
    await singInWithGoogle.mockResolvedValue(loginData);
    await startGoogleLogin()(dispatch);
    expect(dispatch).toBeCalledTimes(2);
    expect(dispatch).toBeCalledWith(checkingCredentials());
    expect(dispatch).toBeCalledWith(login(loginData));
  });

  test("should be invoque startGoogleLogin and lout successfully with a error message", async () => {
    const loginData = {
      ok: false,
      error:{
        message: 'Google Error'
      }
    }
    await singInWithGoogle.mockResolvedValue(loginData);
    await startGoogleLogin()(dispatch);
    expect(dispatch).toBeCalledTimes(2);
    expect(dispatch).toBeCalledWith(checkingCredentials());
    expect(dispatch).toBeCalledWith(logout(loginData.error.message));
  });

  describe("startCreateUser", () => {

    test("should be invoque startCreateUser and login successfully", async () => {

      await singUpWithEmail.mockResolvedValue({
        ok: true,
        ...demoUser
      });
      await startCreateUser(demoUser.email, demoUser.password, demoUser.displayName)(dispatch);
      expect(dispatch).toBeCalledTimes(2);
      expect(dispatch).toBeCalledWith(checkingCredentials());
      expect(dispatch).toBeCalledWith(login({
        ok: true,
        ...demoUser
      }));
    });

    test('should be invoque startCreateUser and logout with a error message', async () => {
      await singUpWithEmail.mockResolvedValue({
        ok: false,
        errorMessage: 'Google Error'
      });
      await startCreateUser(demoUser.email, demoUser.password, demoUser.displayName)(dispatch);
      expect(dispatch).toBeCalledTimes(2);
      expect(dispatch).toBeCalledWith(checkingCredentials());
      expect(dispatch).toBeCalledWith(logout({ errorMessage: 'Google Error'}));
    });
  });

  describe('startLoginEmailPassword', () => {

    test("should be invoque startLoginEmailPassword and login successfully", async () => {
      const loginData = {
        ok: true,
        ...demoUser
      };
      await loginWithEmail.mockResolvedValue(loginData);
      await startLoginEmailPassword(demoUser.email, demoUser.password)(dispatch);
      expect(dispatch).toBeCalledTimes(2);
    });

    test('should be invoque startLoginEmailPassword and logout with a error message', async () => {
      const loginData = {
        ok: false,
        errorMessage: 'Google Error'
      };
      await loginWithEmail.mockResolvedValue(loginData);
      await startLoginEmailPassword(demoUser.email, demoUser.password)(dispatch);
      expect(dispatch).toBeCalledTimes(2);
      expect(dispatch).toBeCalledWith(logout({ errorMessage: 'Google Error'}));
    });
  })

});