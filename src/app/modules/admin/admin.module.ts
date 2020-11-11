import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', component: AdminLayoutComponent, children: [
      {path: 'login', component: LoginComponent}
    ]}
];


@NgModule({
  declarations: [AdminLayoutComponent, LoginComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AdminModule { }
