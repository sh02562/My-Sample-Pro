import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from '../app/admin/admin.component';
import {HomeComponent} from '../app/home/home.component';
import {ContactUsComponent} from '../app/contact-us/contact-us.component';
import {DownloadComponent} from '../app/download/download.component';
import {HierarchyComponent} from '../app/hierarchy/hierarchy.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'admin',component:AdminComponent},
  {path:'contactus',component:ContactUsComponent},
  {path:'download',component:DownloadComponent},
  {path:'hierarchy',component:HierarchyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
