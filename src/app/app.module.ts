import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateaccountComponent } from './components/createaccount/createaccount.component';
import { LoginComponent } from './components/login/login.component';
import { NoteitComponent } from './components/noteit/noteit.component';
import { OpendiaryComponent } from './components/opendiary/opendiary.component';
import { ChoosebycategoryComponent } from './components/choosebycategory/choosebycategory.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NgxSpinnerModule } from 'ngx-spinner';
import { environment } from '../environments/environment';
import { AuthGuard } from './services/auth.guard';
import { FullstoryComponent } from './components/fullstory/fullstory.component';
import { EditComponent } from './components/edit/edit.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { BookpageComponent } from './components/bookpage/bookpage.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateaccountComponent,
    LoginComponent,
    NoteitComponent,
    OpendiaryComponent,
    ChoosebycategoryComponent,
    FullstoryComponent,
    BookpageComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    LazyLoadImageModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
