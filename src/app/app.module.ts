import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CreateaccountComponent } from './components/createaccount/createaccount.component';
import { LoginComponent } from './components/login/login.component';
import { NoteitComponent } from './components/noteit/noteit.component';
import { OpendiaryComponent } from './components/opendiary/opendiary.component';
import { ChoosebycategoryComponent } from './components/choosebycategory/choosebycategory.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

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
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
