import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DefaultComponent} from "./layouts/default/default.component";
import {DashboardComponent} from "./modules/dashboard/dashboard.component";
import {PostsComponent} from "./modules/posts/posts.component";
import {CategoriesComponent} from "./modules/categories/categories.component";
import {UsersComponent} from "./modules/users/users.component";
import {NotFoundComponent} from "./modules/not-found/not-found.component";
import {RegisterComponent} from "./modules/register/register.component";
import {LoginComponent} from "./modules/login/login.component";
import {AuthGuard} from "./helpers/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {path: '', component: DashboardComponent, pathMatch: 'full', canActivate: [AuthGuard]},
      {path: 'danh-sach-bai-dang', component: PostsComponent},
      {path: 'danh-sach-danh-muc', component: CategoriesComponent},
      {path: 'danh-sach-nguoi-dung', component: UsersComponent},
      {path: 'dang-ki', component: RegisterComponent},
      {path: 'dang-nhap', component: LoginComponent},
      {path: '**', component: NotFoundComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
