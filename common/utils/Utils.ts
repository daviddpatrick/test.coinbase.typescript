export function validateSuccessfulHttpStatusCode(I: CodeceptJS.I, httpStatusCode: number): void {
  for (const errorCode of [400, 401, 500, 502, 503, 504]) {
    I.assertNotDeepStrictEqual(httpStatusCode, errorCode);
  }
}
