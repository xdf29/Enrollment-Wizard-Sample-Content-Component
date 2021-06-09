import { LightningElement, api } from 'lwc';

export default class EnrollmentWizardSample3 extends LightningElement {
    path1Data;
    path2Data;

    _allData;

    @api entityContext;

    @api
    get allData() {
        return this._allData;
    }
    set allData(pathValues) {
        if (pathValues) {
            console.log(JSON.stringify(pathValues))
            pathValues.forEach(pathData => {
                if(pathData.path === 'Patient_Info'){
                    this.path1Data = pathData.data
                }else if(pathData.path === 'Financial_Info'){
                    this.path2Data = pathData.data
                }
            })
            this._allData = pathValues
        }
        this.dispatchEvent(new CustomEvent('initialize', { bubbles: true }));
    }

    connectedCallback() {
        // Dispatch getData event to get allData
        this.dispatchEvent(new CustomEvent('getdata'));
    }
}
