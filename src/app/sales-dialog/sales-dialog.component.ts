import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { SalesDialogData } from '../masters/masters.component';
//import { SalesDialogData } from '../masters/masters.component';
import {IfieldValue} from '../masters/fieldValue';

//export interface PeriodicElement {
//    name: string;
 //   position: number;
 //   weight: number;
 //    symbol: string;
//}

//export interface formData{
 // first_field: string;
 // select_markst: string;
  //opt_equipment: string;
//}

 // const ELEMENT_DATA: PeriodicElement[] = [
 //   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  //   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  //   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  // ];
 
@Component({
  selector: 'app-sales-dialog',
  templateUrl: './sales-dialog.component.html',
  styleUrls: ['./sales-dialog.component.scss']
})
export class SalesDialogComponent implements OnInit {

  //displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  //dataSource = ELEMENT_DATA;
  dataSource :IfieldValue;
  displayedColumns: string[]= ['name','select_mark','option_equipment'];

  
  constructor(
    public dialogRef: MatDialogRef<SalesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SalesDialogData) {
      
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
 
  ngOnInit() {
  }

}
