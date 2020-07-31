import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from "./dashboard.component";
import {AuthGuard} from "../../helpers/auth.guard";
import {PostsComponent} from "../posts/posts.component";
import {CategoriesComponent} from "../categories/categories.component";
import {UsersComponent} from "../users/users.component";

const routes: Routes = [
  {path: '', component: DashboardComponent, pathMatch: 'full', canActivate: [AuthGuard]},
  {path: 'danh-sach-bai-dang', component: PostsComponent},
  {path: 'danh-sach-danh-muc', component: CategoriesComponent},
  {path: 'danh-sach-nguoi-dung', component: UsersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
