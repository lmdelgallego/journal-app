import { beforeEach, describe, expect, test, vi } from "vitest";
import { checkAuth, startGoogleLogin } from "../thunks";
import { checkingCredentials, login, logout } from "../authSlice";
import { demoUser } from "./fixtures/authFixtures";
import { singInWithGoogle } from "../../../firebase/providers";

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

});