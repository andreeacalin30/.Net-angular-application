export class Loan{
    
    private Id: string;
    private borrower_name: string;
    private repayment_amount: number;
    private funding_amount: number;

    constructor( Id: string,
        borrower_name: string,
        repayment_amount: number,
        funding_amount: number){
                this.Id = Id;
                this.borrower_name = borrower_name;
                this.repayment_amount = repayment_amount;
                this.funding_amount = funding_amount;
        }

        public getId(){
                return this.Id;
        }

        public getBorrowerName(){
                return this.borrower_name;
        }

        public getRepaymentAmount(){
                return this.repayment_amount;
        }

        public getFundingAmount(){
                return this.funding_amount;
        }
}