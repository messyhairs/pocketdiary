import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateaccountComponent } from './components/createaccount/createaccount.component';
import { LoginComponent } from './components/login/login.component';
import { NoteitComponent } from './components/noteit/noteit.component';
import { OpendiaryComponent } from './components/opendiary/opendiary.component';
import { ChoosebycategoryComponent } from './components/choosebycategory/choosebycategory.component';
const routes: Routes = [
  {
    path: 'open', component: OpendiaryComponent
  },
  {
    path: 'category', component: ChoosebycategoryComponent
  },
  {
    path: 'creatediary', component: NoteitComponent
  },
  {
    path: 'createaccount', component: CreateaccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
