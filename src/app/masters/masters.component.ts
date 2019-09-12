import { Component, OnInit, Input, Inject } from '@angular/core';
//import { MAT_DIALOG_DATA } from '@angular/material';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { SalesDialogComponent } from '../sales-dialog/sales-dialog.component';
import { FormBuilder, FormGroup } from '@angular/forms';


export interface SalesDialogData {
  animal: string;
  name: string;
  selectedValue: string;
}

export interface selectMark{
  value:string;
  viewValue:string;
}

@Component({
  selector: 'app-masters',
  templateUrl: './masters.component.html',
  styleUrls: ['./masters.component.scss']
})
export class MastersComponent implements OnInit {

  @Input() public parentData;
  animal: string;
  name: string;
  selectedValue: string;
 // selectMark[]: Array<string>;
 userForm: FormGroup;

  Marks: selectMark[] = [
 {value: 'SM1', viewValue:'SMark-1'},
 {value: 'SM2', viewValue:'SMark-2'},
 {value: 'SM3', viewValue:'SMark-3'}
  ];
 constructor(public formBuilder: FormBuilder,
  public dialog: MatDialog) {
    this.userForm = this.formBuilder.group({
      'select_mark': [''],
      'name':[''],
      'option_equipment':['']
           });
  }


 openDialog(): void {
   const dialogRef = this.dialog.open(SalesDialogComponent, {
     width: '900px',
     data: {name: this.userForm.controls.name.value, O_equipment: this.userForm.controls.option_equipment.value,  select: this.Marks.find(x=>x.value== this.userForm.controls.select_mark.value).viewValue}  
   });
   dialogRef.afterClosed().subscribe(result => {
     console.log('The dialog was closed');
     console.log ('Check option value' + '' + this.userForm.controls.select_mark.value);
     this.animal = result;
   });
 }
 ngOnInit() {
  }

}
