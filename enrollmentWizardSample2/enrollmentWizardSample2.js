import { LightningElement, api, track } from 'lwc';

export default class EnrollmentWizardSample2 extends LightningElement {
    @api
    wizardPathData

    @track
    data = {
        age: undefined
    };

    @api entityContext;

    @api
    getData() {
        return this.data;
    }

    // 1st Scenario
    // async/await way when u have more than 1 apex callout to make during initialize
    /* async connectedCallback() {
        let res1 = await this.mockApexCall();
        this.data.name = res1;
        this.dispatchEvent(new CustomEvent('initialize'));
    } */

    // 2nd Scenario
    // .then way when u have only one apex callout to make during initialize
    connectedCallback() {
        this.mockApexCall().then((res) => {
            this.data.age = res;
            this.dispatchEvent(new CustomEvent('initialize', { bubbles: true }));
        });
    }

    // 3rd Scenario
    /**
     * Use 2 wire methods or 1 wire with 1 Apex method
     * And the result from one method is dependent on anoother method
     *
     * Example: use wire to retrieve all picklist values for a field,
     * use wire to retrieve record
     * construct pill to display picklist (Document Categery)
     *  */
    /* 
        @wire wireMethod1
        method1(){
            this.wire1result1 = true
        }

        @wire wireMethod2
        method2(){
            this.wire1result2 = true
        }

        connectedCallback() {
            const timer = setInterval(() => {
                if (this.wire1result && this.wire2result) {
                    this.processData(); // Code for logic / data manipulation 
                    this.dispatchEvent(new CustomEvent('initialize',, { bubbles: true }));
                    console.log('Init Sample 2');
                    clearInterval(timer);
                }
            }, 300);
        } 
    */

    @api
    validation() {
        //Validation Logic Goes Here
        return true;
    }

    @api
    async save() {
        let res = await this.mockApexCall();
        if (res) {
            return true;
        } else {
            return false;
        }
    }

    changeHandler(event){
        this.data.age = event.target.value;
    }

    //Mock Apex Callout

    mockApexCall() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(99);
            }, 1000);
        });
    }
}
