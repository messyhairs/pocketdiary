import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateaccountComponent } from './components/createaccount/createaccount.component';
import { LoginComponent } from './components/login/login.component';
import { NoteitComponent } from './components/noteit/noteit.component';
import { OpendiaryComponent } from './components/opendiary/opendiary.component';
import { ChoosebycategoryComponent } from './components/choosebycategory/choosebycategory.component';
import { FullstoryComponent } from './components/fullstory/fullstory.component';
import { EditComponent } from './components/edit/edit.component';
import { AuthGuard } from './services/auth.guard';
const routes: Routes = [
  {
    path: 'open', component: OpendiaryComponent, canActivate: [AuthGuard]
  },
  {
    path: 'category', component: ChoosebycategoryComponent
  },
  {
    path: 'creatediary', component: NoteitComponent, canActivate: [AuthGuard]
  },
  {
    path: 'createaccount', component: CreateaccountComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'edit/:id', component: EditComponent, canActivate: [AuthGuard]
  },
  {
    path: 'readstory/:id', component: FullstoryComponent, canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
