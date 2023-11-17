import {SwagLabsLoginPage} from "../pages/SwagLabsLoginPage";
import {InventoryPage} from "../pages/InventoryPage";
class Injector {
    private isInitialized: boolean;
    private SwagLabsLoginPage: SwagLabsLoginPage;
    private InventoryPage: InventoryPage;

    public getPageObjects(): any {
        if (!this.isInitialized) {
            this.SwagLabsLoginPage = new SwagLabsLoginPage();
            this.InventoryPage = new InventoryPage();
            this.isInitialized = true;
        }
        return {
            SwagLabsLoginPage: this.SwagLabsLoginPage,
            InventoryPage: this.InventoryPage,
        }
    }
}

export default new Injector();