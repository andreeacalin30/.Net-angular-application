import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Loan } from '../models/loan.model';
import { LoanServiceService } from '../services/loan-service.service';
import { v4 as uuidv4 } from 'uuid';
import { LoansListComponent } from '../loans-list/loans-list.component';
@Component({
  selector: 'app-loan-form',
  templateUrl: './loan-form.component.html',
  styleUrls: ['./loan-form.component.scss']
})

export class LoanFormComponent implements OnInit {
  addLoanForm: FormGroup;
  incorrectSums : boolean = false;
  addedLoan: boolean = false;
  constructor(private formBuilder: FormBuilder, private loansService: LoanServiceService) {
    this.addLoanForm = this.formBuilder.group({
      borrowerName: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      repaymentAmount: [null, [Validators.required, Validators.pattern('\.[0-9]+$')]],
      fundingAmount: [null, [Validators.required, Validators.pattern('\.[0-9]+$')]]
    })
   }

  ngOnInit(): void {
  }
  addLoan(){
    var borrowerName = this.addLoanForm.get('borrowerName').value;
    var repaymentAmount : number = +this.addLoanForm.get('repaymentAmount').value;
    var fundingAmount : number = +this.addLoanForm.get('fundingAmount').value;
    var Id = uuidv4();
    var newLoan = new Loan(Id, borrowerName, repaymentAmount, fundingAmount );
    if(fundingAmount > repaymentAmount){
      this.incorrectSums = true;
      this.addedLoan = false;
    } else {
      this.incorrectSums = false;
      this.addedLoan = true;
      this.loansService.addLoan(newLoan).subscribe(()=> this.addedLoan = true);
    }
  }
}
