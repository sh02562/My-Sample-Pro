import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MaterialModule } from './material/material.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HierarchyComponent } from './hierarchy/hierarchy.component';
import { DownloadComponent } from './download/download.component';
import { AdminComponent } from './admin/admin.component';
import { MastersComponent } from './masters/masters.component';
import { PreSalesComponent } from './pre-sales/pre-sales.component';
import { SalesComponent } from './sales/sales.component';
import { EventManagementComponent } from './event-management/event-management.component';
import { ReportsComponent } from './reports/reports.component';
import { AccountStatementComponent } from './account-statement/account-statement.component';
import { ExportComponent } from './export/export.component';
import {MatDialogModule} from '@angular/material/dialog';
import { SalesDialogComponent } from './sales-dialog/sales-dialog.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table'; 
import { CdkColumnDef } from '@angular/cdk/table';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ContactUsComponent,
    HierarchyComponent,
    DownloadComponent,
    AdminComponent,
    MastersComponent,
    PreSalesComponent,
    SalesComponent,
    EventManagementComponent,
    ReportsComponent,
    AccountStatementComponent,
    ExportComponent,
    SalesDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatDialogModule,
    FormsModule,
    MatTableModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot()
    ],
  providers: [CdkColumnDef],
  bootstrap: [AppComponent],
  entryComponents: [
    SalesDialogComponent 
  ]
})
export class AppModule { }
