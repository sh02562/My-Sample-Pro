import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import {MatInputModule} from '@angular/material/input'; 
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';  
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import {MatNativeDateModule} from '@angular/material';

const MaterialComponent=[MatButtonModule,MatGridListModule,MatSelectModule,MatDatepickerModule, MatNativeDateModule ,
MatInputModule];

@NgModule({
  declarations: [],
  imports: [    
    MaterialComponent  ],
  exports:[
    MaterialComponent,
    ]
})
export class MaterialModule { }
