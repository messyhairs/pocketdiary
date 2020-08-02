import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateaccountComponent } from './components/createaccount/createaccount.component';
import { LoginComponent } from './components/login/login.component';
import { NoteitComponent } from './components/noteit/noteit.component';
import { OpendiaryComponent } from './components/opendiary/opendiary.component';
import { ChoosebycategoryComponent } from './components/choosebycategory/choosebycategory.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateaccountComponent,
    LoginComponent,
    NoteitComponent,
    OpendiaryComponent,
    ChoosebycategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
