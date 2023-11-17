const { I } = inject();
Feature("Gettting BTC price from CoinBase API");

Scenario("Get Coinbase API Bitcoin price.", { retries: 0 }, async ({ I }) => {
  I.say("----------------------Step1-----------------------");
  const btcUsdPrice = await I.getBtcUsdPrice(I);
  I.say("----------------------Step2-----------------------");
  I.assert(btcUsdPrice > 0, true, `The current BTC price is $${btcUsdPrice}.`);
});
