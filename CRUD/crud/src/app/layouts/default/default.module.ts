import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {DefaultComponent} from "./default.component";
import {DashboardComponent} from "../../modules/dashboard/dashboard.component";
import {PostsComponent} from "../../modules/posts/posts.component";
import {SharedModule} from "../../shared/shared.module";
import {CategoriesComponent} from "../../modules/categories/categories.component";
import {UsersComponent} from "../../modules/users/users.component";
import {NotFoundComponent} from "../../modules/not-found/not-found.component";
import {MaterialModule} from "../../shared/material/material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EditUserComponent} from "../../modules/users/edit-user/edit-user.component";

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    CategoriesComponent,
    UsersComponent,
    NotFoundComponent,
    EditUserComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class DefaultModule {
}
