import { LocatorsInventoryPage } from "../locators/locators";
import I = CodeceptJS.I;

const { I } = inject();

export class InventoryPage {
  public I: I;
  public readonly sauseLabsBackpackLabel = LocatorsInventoryPage.sauseLabsBackpackLabel;

  public constructor() {
    this.I = I;
  }
  public async openInventoryPage(): Promise<void> {
    await this.I.amOnPage("/inventory.html");
  }
  public async getBackpackLabel(): Promise<string> {
    await this.I.waitForVisible(this.sauseLabsBackpackLabel);
    return await this.I.grabTextFrom(this.sauseLabsBackpackLabel);
  }
}
