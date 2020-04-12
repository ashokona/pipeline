export class Settings {
    isLoading: boolean;
    gridLoading: boolean;
    accounts: any[];
    selectedAccounts: any[];
    constructor() {
        this.isLoading = false;
        this.gridLoading = false;
        this.selectedAccounts = [];
    }
}
