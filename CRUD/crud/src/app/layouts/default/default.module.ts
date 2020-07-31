import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {DefaultComponent} from "./default.component";
import {SharedModule} from "../../shared/shared.module";
import {NotFoundComponent} from "../../modules/not-found/not-found.component";
import {MaterialModule} from "../../shared/material/material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    DefaultComponent,
    NotFoundComponent,
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
