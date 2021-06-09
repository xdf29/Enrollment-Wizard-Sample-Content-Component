import { LightningElement, api, track } from 'lwc';

export default class EnrollmentWizardSample1 extends LightningElement {
    @track
    data = {
        name: ''
    };

    @api entityContext;
    /*{
        actorType: null, (Account / Lead)
        actorRecordId: null, (Account / Lead record Id)
        enrollmentRecordId: null (Enrollment record Id)
    }*/

    @api
    getData() {
        return this.data;
    }

    async connectedCallback() {
        let res = await this.mockApexCall();
        this.data.name = res;
        this.dispatchEvent(new CustomEvent('initialize', { bubbles: true }));
    }

    @api
    async validation() {
        let apexValidation = await this.mockApexValidationCall();
        if (this.data.name && apexValidation) {
            return true;
        } else {
            return false;
        }
    }

    @api
    async save() {
        let res = await this.mockApexUpdateCall();
        if (res) {
            return true;
        } else {
            return false;
        }
    }

    changeHandler(event) {
        this.data.name = event.target.value;
    }

    //Mock Apex Callout

    mockApexCall() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('Sample Name');
            }, 100);
        });
    }

    mockApexUpdateCall() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(true);
            }, 100);
        });
    }

    mockApexValidationCall() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(true);
            }, 100);
        });
    }
}
