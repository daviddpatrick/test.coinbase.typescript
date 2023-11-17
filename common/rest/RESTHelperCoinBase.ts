// eslint-disable-next-line
/// <reference path="../../steps.d.ts" />

export class RESTHelperCoinBase extends Helper {
  public constructor(config: any) {
    super(config);
  }
  public async getBtcUsdPrice(I: CodeceptJS.I): Promise<any> {
    const rest = this.helpers["REST"];
    const url = `/prices/BTC-USD/buy`;
    try {
      const response = await rest.sendGetRequest(url);
      I.assertOk(response.status === 200, `The response status code is ${response.status}.`);
      return parseInt(response.data.data["amount"]);
    } catch (e) {
      console.log(e);
      return Error(
        `The request for getting btc usd price was unsuccessful and the following error was returned: \n  ${e}`,
      );
    }
  }
}
module.exports = RESTHelperCoinBase;
