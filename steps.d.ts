/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');

// @ts-ignore
type RESTHelperCoinBase = import("../common/rest/RESTHelperCoinBase");
// @ts-ignore
type AssertWrapper = import("codeceptjs-assert");

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any }
  interface Methods extends Playwright, AssertWrapper {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
  export interface I {
    getBtcUsdPrice(I: CodeceptJS.I): Promise<any>;
  }
}
