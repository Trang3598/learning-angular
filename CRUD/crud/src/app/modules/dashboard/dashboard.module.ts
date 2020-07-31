import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoriesComponent} from "../categories/categories.component";
import {PostsComponent} from "../posts/posts.component";
import {UsersComponent} from "../users/users.component";
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {EditUserComponent} from "../users/edit-user/edit-user.component";
import {MaterialModule} from "../../shared/material/material.module";


@NgModule({
  declarations: [
    CategoriesComponent,
    PostsComponent,
    UsersComponent,
    EditUserComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule
  ]
})
export class DashboardModule {
}
