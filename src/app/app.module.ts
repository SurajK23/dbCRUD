import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpListComponent } from './Component/emp-list/emp-list.component';
import { EmpAddComponent } from './Component/emp-add/emp-add.component';
import { CommunicationComponent } from './Component/communication/communication.component';
import { ListItemComponent } from './Component/list-item/list-item.component';
import { EmpLinkComponent } from './Component/emp-link/emp-link.component';
import { LinkDataComponent } from './Component/link-data/link-data.component';


@NgModule({
  declarations: [
    AppComponent,
    EmpListComponent,
    EmpAddComponent,
    CommunicationComponent,
    ListItemComponent,
    EmpLinkComponent,
    LinkDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
