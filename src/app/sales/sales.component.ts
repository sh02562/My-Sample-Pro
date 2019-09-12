import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { SalesDialogComponent } from '../sales-dialog/sales-dialog.component';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';


export interface selectVar{
  value:string;
  viewValue:string;
}

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  @Input() public parentData;
  salesForm: FormGroup;

  dBranch: selectVar[] = [
    {value: 'dBranch1', viewValue:'Dealer Branch-1'},
    {value: 'dBranch2', viewValue:'Dealer Branch-2'}    
     ];

     salesOfficers: selectVar[] = [
    {value: 'salesOfficers1', viewValue:'Sales Offices-1'},
    {value: 'salesOfficers2', viewValue:'Sales Offices-2'}    
    ];

    sourceOnly: selectVar[] = [
    {value: 'source1', viewValue:'Source-1'},
    {value: 'source2', viewValue:'Source-2'}    
    ];

    sourceDetails: selectVar[] = [
    {value: 'sourceDetails1', viewValue:'Source Details-1'},
    {value: 'sourceDetails2', viewValue:'Source Details-2'}    
    ];

    onGoingEvents: selectVar[] = [
    {value: 'onGoingEvents1', viewValue:'OnGoingEvents-1'},
    {value: 'onGoingEvents2', viewValue:'OnGoingEvents-2'}    
    ];

     customerType: selectVar[] = [
    {value: 'customerType1', viewValue:'Customer Type-1'},
    {value: 'customerType2', viewValue:'Customer Type-2'}    
    ];

    titleDetails: selectVar[] = [
    {value: 'titleDetails1', viewValue:'Title-1'},
    {value: 'titleDetails2', viewValue:'Title-2'}    
    ];
             
    ageDetails: selectVar[] = [
    {value: 'ageDetails1', viewValue:'Age-1'},
    {value: 'ageDetails2', viewValue:'Age-2'}    
    ];

    countrySee: selectVar[] = [
    {value: 'country1', viewValue:'Country-1'},
    {value: 'country2', viewValue:'Country-2'}    
    ];

    stateDetails: selectVar[] = [
    {value: 'stateDetails1', viewValue:'State-1'},
    {value: 'stateDetails2', viewValue:'State-2'}    
    ];
   
    district: selectVar[] = [
    {value: 'district1', viewValue:'District-1'},
    {value: 'district2', viewValue:'District-2'}    
    ];

    cityVillage: selectVar[] = [
      {value: 'cityVillage1', viewValue:'City-1'},
      {value: 'cityVillage2', viewValue:'City-2'}    
      ];

      annualIncome: selectVar[] = [
        {value: 'annualIncome1', viewValue:'Annual Income-1'},
        {value: 'SannualIncome2', viewValue:'Annual Income-2'}    
        ];
                              
        occupation: selectVar[] = [
        {value: 'occupation1', viewValue:'Occupation-1'},
        {value: 'occupation2', viewValue:'Occupation-2'}    
        ];

        soilConsistancy: selectVar[] = [
        {value: 'soilConsistancy1', viewValue:'Soil Consistancy-1'},
        {value: 'soilConsistancy2', viewValue:'Soil Consistancy-2'}    
        ];

        cropsGrown: selectVar[] = [
        {value: 'CG1', viewValue:'CropsGrown-1'},
        {value: 'CG2', viewValue:'CropsGrown-2'}    
        ];

       make: selectVar[] = [
      {value: 'make1', viewValue:'Make-1'},
      {value: 'make2', viewValue:'Make-2'}    
      ];

      model: selectVar[] = [
      {value: 'model1', viewValue:'Model-1'},
      {value: 'model2', viewValue:'Model-2'}    
      ];

      hp: selectVar[] = [
      {value: 'hp1', viewValue:'HP-1'},
      {value: 'hp2', viewValue:'HP-2'}    
      ];

       pto:selectVar[] = [
    {value: 'pto1', viewValue:'PTO-1'},
    {value: 'pto2', viewValue:'PTO-2'}    
    ];
                                    
    selectMake:selectVar[] = [
    {value: 'selectMake1', viewValue:'Select Make-1'},
    {value: 'selectMake2', viewValue:'Select Make-2'}    
    ];

    equipmentMake: selectVar[] = [
    {value: 'equipmentMake1', viewValue:'Equipment Make-1'},
    {value: 'equipmentMake2', viewValue:'Equipment Make-2'}    
    ];
  
    selectProduct:selectVar[] = [
    {value: 'selectProduct1', viewValue:'Select Product-1'},
    {value: 'selectProduct2', viewValue:'Select Product-2'}    
     ];

selectProductCatagory: selectVar[] = [
    {value: 'selectProductCatagory1', viewValue:'ProductCatagory-1'},
    {value: 'selectProductCatagory2', viewValue:'ProductCatagory-2'}    
    ];

    productSubCatagory: selectVar[] = [
    {value: 'productSubCatagory1', viewValue:'ProductSubCatagory-1'},
    {value: 'productSubCatagory2', viewValue:'ProductSubCatagory-2'}    
    ];

    productType: selectVar[] = [
    {value: 'productType1', viewValue:'ProductType-1'},
    {value: 'productType2', viewValue:'ProductType-2'}    
    ];
      
    select1: selectVar[] = [
    {value: 'select1-1', viewValue:'select1-1'},
    {value: 'select1-2', viewValue:'select1-2'}    
    ];

    select2: selectVar[] = [
    {value: 'select2-1', viewValue:'select2-1'},
    {value: 'select2-2', viewValue:'select2-2'}    
    ];

    select3: selectVar[] = [
    {value: 'select3-1', viewValue:'select3-1'},
    {value: 'select3-2', viewValue:'select3-2'}    
    ];

    select4: selectVar[] = [
      {value: 'select4-1', viewValue:'select4-1'},
      {value: 'select4-2', viewValue:'select4-2'}    
      ];
  
      select5: selectVar[] = [
      {value: 'select5-1', viewValue:'select5-1'},
      {value: 'select5-2', viewValue:'select5-2'}    
      ];
   
      purposeOfPurchase: selectVar[] = [
    {value: 'purposeOfPurchase1', viewValue:'PurposeOfPurchase-1'},
    {value: 'purposeOfPurchase2', viewValue:'PurposeOfPurchase-2'}    
    ];

    subsidyRequired: selectVar[] = [
    {value: 'subsidyRequired1', viewValue:'SubsidyRequired-1'},
    {value: 'subsidyRequired2', viewValue:'SubsidyRequired-2'}    
    ];

    paymentMode: selectVar[] = [
    {value: 'paymentMode1', viewValue:'PaymentMode-1'},
    {value: 'paymentMode2', viewValue:'PaymentMode-2'}    
    ];

   
    constructor(public formBuilder: FormBuilder,
          public dialog: MatDialog) {
    this.salesForm = this.formBuilder.group({
                'myDateValue':[''],
                'Dealer_Branch': [''],
                'Sales_Officers':[''],
                'Source_only':[''],
                'Source_Details': [''],
                'On_Going_Events':[''],
                'Customer_Type':[''],
                'Title_Details' :[''],
                'firstName':[''],
                'relation':[''],
                 'middleName':[''],
                 'lastName':[''],
                 'myBirthDate':[''],
                 'Age_Details':[''],
                 'mobileNumber':[''],
                 'altMobileNumber':[''],
                 'email':[''],
                 'Country_see':[''],
                 'territory':[''],
                 'State_See':[''],
                 'District_see':[''],
                 'Thesil_see':[''],
                 'City_Village':[''],
                 'Pincode':[''],
                 'Annual_Income':[''],
                 'Occupation_See':[''],
                 'Land_Size':[''],
                 'Soil_Consistancy':[''],
                 'Crops_Grown':[''],
                 'Wheat_Rice':[''],
                 'Mark_See':[''],
                 'Model_See':[''],
                 'HP_See':[''],
                 'relation_see':[''],
                 'Middle_Name':[''],
                 'Last_Name':[''],
                 'PTO':[''],
                 'Select_Make':[''],
                 'Equipment_Make':[''],
                 'Select_Product':[''],
                 'SelectProductCatagory':[''],
                 'ProductSubCatagory':[''],
                 'Product_Type':[''],
                 'Select_1':[''],
                 'Select_2':[''],
                 'Select_3':[''],
                 'Select_4':[''],
                 'Select_5':[''],
                 'Purpose_OfPurchase':[''],
                 'Whatever_SubsidyRequired':[''],
                 'Payment_Mode':[''],
                 'ExpectedDate':[''],
                 'NextDate':[''],
                });

        } 

    openDialogSubmit(): void {
    const dialogRef = this.dialog.open(SalesDialogComponent, {
                        width: '1500px',
                        data: {//name: this.salesForm.controls.name.value, 
                          picked:this.salesForm.controls.myDateValue.value,
                        dealerbranch: this.dBranch.find(x=>x.value== this.salesForm.controls.Dealer_Branch.value).viewValue,
                        salesoffices: this.salesOfficers.find(x=>x.value== this.salesForm.controls.Sales_Officers.value).viewValue,
                        sources: this.sourceOnly.find(x=>x.value== this.salesForm.controls.Source_only.value).viewValue,
                        sourcedetails: this.sourceDetails.find(x=>x.value== this.salesForm.controls.Source_Details.value).viewValue,
                        ongoingevents: this.onGoingEvents.find(x=>x.value== this.salesForm.controls.On_Going_Events.value).viewValue,
                        customertype: this.customerType.find(x=>x.value== this.salesForm.controls.Customer_Type.value).viewValue,
                        titledetails: this.titleDetails.find(x=>x.value== this.salesForm.controls.Title_Details.value).viewValue,
                        firstname: this.salesForm.controls.firstName.value,
                        relation: this.salesForm.controls.relation.value,
                        middlename: this.salesForm.controls.middleName.value,
                        lastname: this.salesForm.controls.lastName.value,
                        birthdate:this.salesForm.controls.myBirthDate.value,
                        agedetails: this.ageDetails.find(x=>x.value== this.salesForm.controls.Age_Details.value).viewValue,
                        mobilenumber: this.salesForm.controls.mobileNumber.value,
                        altmobilenumber: this.salesForm.controls.altMobileNumber.value,
                        Email:this.salesForm.controls.email.value,
                        countrysee: this.countrySee.find(x=>x.value== this.salesForm.controls.Country_see.value).viewValue,
                        territory:this.salesForm.controls.territory.value,
                        statesee: this.stateDetails.find(x=>x.value== this.salesForm.controls.State_See.value).viewValue,
                        districts: this.district.find(x=>x.value== this.salesForm.controls.District_see.value).viewValue,
                        thesil:this.salesForm.controls.Thesil_see.value,
                        cityVillage: this.cityVillage.find(x=>x.value== this.salesForm.controls.City_Village.value).viewValue,
                        Pincode:this.salesForm.controls.Pincode.value,
                        annualincome: this.annualIncome.find(x=>x.value== this.salesForm.controls.Annual_Income.value).viewValue,
                        occupationsee: this.occupation.find(x=>x.value== this.salesForm.controls.Occupation_See.value).viewValue,
                        landsize:this.salesForm.controls.Land_Size.value,
                        soilconsistancy: this.soilConsistancy.find(x=>x.value== this.salesForm.controls.Soil_Consistancy.value).viewValue,
                        cropsgrown: this.cropsGrown.find(x=>x.value== this.salesForm.controls.Crops_Grown.value).viewValue,
                        wheatrice:this.salesForm.controls.Wheat_Rice.value,
                        makesee: this.make.find(x=>x.value== this.salesForm.controls.Mark_See.value).viewValue,
                        modelsee: this.model.find(x=>x.value== this.salesForm.controls.Model_See.value).viewValue,
                        hps: this.hp.find(x=>x.value== this.salesForm.controls.HP_See.value).viewValue,
                        relationsee: this.salesForm.controls.relation_see.value,
                        MiddleName: this.salesForm.controls.Middle_Name.value,
                        LastName: this.salesForm.controls.Last_Name.value,
                        pto: this.pto.find(x=>x.value== this.salesForm.controls.PTO.value).viewValue,
                        selectMake: this.selectMake.find(x=>x.value== this.salesForm.controls.Select_Make.value).viewValue,
                        equipmentMake: this.equipmentMake.find(x=>x.value== this.salesForm.controls.Equipment_Make.value).viewValue,
                        selectProduct: this.selectProduct.find(x=>x.value== this.salesForm.controls.Select_Product.value).viewValue,
                        selectproductcatagory: this.selectProductCatagory.find(x=>x.value== this.salesForm.controls.SelectProductCatagory.value).viewValue,
                        Productsubcatagory: this.productSubCatagory.find(x=>x.value== this.salesForm.controls.ProductSubCatagory.value).viewValue,
                        productype: this.productType.find(x=>x.value== this.salesForm.controls.Product_Type.value).viewValue,
                        select1: this.select1.find(x=>x.value== this.salesForm.controls.Select_1.value).viewValue,
                        select2: this.select2.find(x=>x.value== this.salesForm.controls.Select_2.value).viewValue,
                        select3: this.select3.find(x=>x.value== this.salesForm.controls.Select_3.value).viewValue,
                        select4: this.select4.find(x=>x.value== this.salesForm.controls.Select_4.value).viewValue,
                        select5: this.select5.find(x=>x.value== this.salesForm.controls.Select_5.value).viewValue,
                        purposeofpurchase: this.purposeOfPurchase.find(x=>x.value== this.salesForm.controls.Purpose_OfPurchase.value).viewValue,
                        subsidyrequired: this.subsidyRequired.find(x=>x.value== this.salesForm.controls.Whatever_SubsidyRequired.value).viewValue,
                        paymentmode: this.paymentMode.find(x=>x.value== this.salesForm.controls.Payment_Mode.value).viewValue,
                        expecteddate:this.salesForm.controls.ExpectedDate.value,
                        nextdate:this.salesForm.controls.NextDate.value,
                                }  
                        });
                      dialogRef.afterClosed().subscribe(result => {
                        console.log('The dialog was closed');
                        console.log ('Check option value' + '' + this.salesForm.controls.myDateValue.value);
                                            
                          });
                      }                          
  ngOnInit() {
    
  }

}
