import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpListComponent } from './Component/emp-list/emp-list.component';
import { EmpAddComponent } from './Component/emp-add/emp-add.component';
import { CommunicationComponent } from './Component/communication/communication.component';
import { EmpLinkComponent } from './Component/emp-link/emp-link.component';


const routes: Routes = [
  {
    path:'',
    component:EmpLinkComponent
  },

  {
    path:'list',
    component:EmpListComponent
  },
  {
    path:'add',
    component:EmpAddComponent
  },
  {
    path:'communicate',
    component:CommunicationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
