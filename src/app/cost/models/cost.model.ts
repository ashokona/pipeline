import {Savings} from './cost.interface';
export class Cost {

    isLoading: boolean;
    gridLoading: boolean;
    savings: Savings;


    constructor() {
        this.isLoading = false;
        this.gridLoading = false;
    }
}
