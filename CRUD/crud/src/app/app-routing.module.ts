import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DefaultComponent} from "./layouts/default/default.component";
import {NotFoundComponent} from "./modules/not-found/not-found.component";
import {RegisterComponent} from "./modules/register/register.component";
import {LoginComponent} from "./modules/login/login.component";

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {path: 'dang-ki', component: RegisterComponent},
  {path: 'dang-nhap', component: LoginComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
