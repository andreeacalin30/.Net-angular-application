import { Component, OnInit, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-decision-modal',
  templateUrl: './decision-modal.component.html',
  styleUrls: ['./decision-modal.component.scss']
})
export class DecisionModalComponent implements OnInit {

  constructor(private dialog : MatDialog, private dialogRef :MatDialogRef<DecisionModalComponent> ) { }
  public onYes = new EventEmitter();
  ngOnInit(): void {
  }

  yes(){
    this.dialog.closeAll();  
    this.onYes.emit();
  }

  no(){
    this.dialogRef.close();
  }

}
