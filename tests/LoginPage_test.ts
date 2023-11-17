import Injector from "../common/helpers/Injector";
import assert from "assert";
const { SwagLabsLoginPage, InventoryPage } = Injector.getPageObjects();
Feature("LoginPageTests");

const userInfo = new DataTable(["username"]);
userInfo.add(["standard_user"]);
userInfo.add(["visual_user"]);

Data(userInfo).Scenario("Login with multiple users", { retries: 0 }, async ({ I, current }) => {
  //Arrange
  let userPassord, getBackpackLabel: string;
  userPassord = "secret_sauce";
  getBackpackLabel = "Sauce Labs Backpack";

  //Act
  await SwagLabsLoginPage.openSwagLabsLoginPage();
  await SwagLabsLoginPage.enterUsername(current.username);
  await SwagLabsLoginPage.enterPassword(userPassord);
  await SwagLabsLoginPage.clickLogin();

  //Assert
  await assert(getBackpackLabel, await InventoryPage.getBackpackLabel());
});
