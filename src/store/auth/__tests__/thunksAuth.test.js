import { beforeEach, describe, expect, test, vi } from "vitest";
import { checkAuth } from "../thunks";
import { checkingCredentials } from "../authSlice";

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

});