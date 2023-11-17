import { LocatorsLogInPage } from "../locators/locators";
import I = CodeceptJS.I;

const { I } = inject();

export class SwagLabsLoginPage {
  public I: I;
  public readonly usernameField = LocatorsLogInPage.usernameField;
  public readonly passwordField = LocatorsLogInPage.passwordField;
  public readonly loginButton = LocatorsLogInPage.loginButton;

  public constructor() {
    this.I = I;
  }
  public async openSwagLabsLoginPage(): Promise<void> {
    await this.I.amOnPage("");
  }
  public async enterUsername(username: string): Promise<void> {
    await this.I.waitForVisible(this.usernameField);
    await this.I.fillField(this.usernameField, username);
  }

  public async enterPassword(password: string): Promise<void> {
    await this.I.waitForVisible(this.passwordField);
    await this.I.fillField(this.passwordField, password);
  }

  public async clickLogin(): Promise<void> {
    await this.I.click(this.loginButton);
  }
}
