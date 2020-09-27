import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DecisionModalComponent } from '../decision-modal/decision-modal.component';
import { Loan } from '../models/loan.model';
import { LoanServiceService } from '../services/loan-service.service';

@Component({
  selector: 'app-loans-list',
  templateUrl: './loans-list.component.html',
  styleUrls: ['./loans-list.component.scss']
})
export class LoansListComponent implements OnInit {
  loansList = []
  isPrintingLoans: boolean = true;
  foundLoan : Loan;
  constructor(private loansService: LoanServiceService, private dialogRef: MatDialog) { }

  ngOnInit(): void {
    this.refreshList();
  }

  loanDetails(id: string){
    this.loansService.getLoanById(id).subscribe(loan=>{
      if(loan){
        this.isPrintingLoans = false;
       this.foundLoan = new Loan(loan.id, loan.borrower_name, loan.repayment_amount, loan.funding_amount);
      }
    })
  }

  backToLoans(){
    this.isPrintingLoans = true;
  }

  refreshList(){
    this.loansList = []
    this.loansService.getAllLoans().subscribe(response=>{
      if(response){
        for(let i=0; i< response.length; i++){
          this.loansList.push(response[i])
        }
      } 
    })
  }

  deleteLoan(){
    var decisionModal = this.dialogRef.open(DecisionModalComponent, {autoFocus: false});
      decisionModal.componentInstance.onYes.subscribe(()=>{
        this.isPrintingLoans = true;
        this.loansService.deleteLoan(this.foundLoan).subscribe();
        this.refreshList();
      })
    
  }

}
