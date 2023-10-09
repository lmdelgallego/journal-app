import { describe, expect, test, vi } from "vitest";
import { fileUpload } from "../fileUpload";
import { fetch as crossFetch } from 'cross-fetch';

global.fetch = vi.fn();

function createFetchResponse(data, ok = true) {
  return {
    ok,
    json: () => new Promise((resolve) => resolve(data))
  }
}

const responseObject = {
  public_id: 'dxmgxxnorvovoajukoos',
  secure_url: 'https://mock_URL/dxmgxxnorvovoajukoos.png',
  signature: 'a9b5e2a9c0b4b4b4b4b4b4b4b4b4b4b4b4b4b4b4',
};
describe("fileUpload", () => {

  test("should upload a file correctly", async () => {
    const imageURL = 'https://img.huffingtonpost.com/asset/60081d802500003400e23477.jpeg';
    fetch.mockResolvedValue(createFetchResponse(responseObject));

    const resp = await crossFetch(imageURL);
    const blob = await resp.blob();
    const file = new File([blob], 'foto.png');
    const url = await fileUpload(file);
    expect(url).toEqual({
      id: expect.any(String),
      url: expect.any(String),
      signature: expect.any(String),
    });

  });

  test("should return an error", async () => {
    const imageURL = 'https://img.huffingtonpost.com/asset/60081d802500003400e23477.jpeg';
    fetch.mockResolvedValue(createFetchResponse(responseObject, false));
    const resp = await crossFetch(imageURL);
    const blob = await resp.blob();
    const file = new File([blob], 'foto.png');
    await expect(fileUpload(file)).rejects.toThrow('Error uploading file');
  });
});