import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatDividerModule} from "@angular/material/divider";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {FlexLayoutModule} from "@angular/flex-layout";
import {_MatMenuDirectivesModule, MatMenuModule} from "@angular/material/menu";
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import {HighchartsChartModule} from "highcharts-angular";
import {RouterModule} from "@angular/router";
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";


const reExportingModules = [
  MatSidenavModule,
  MatDividerModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatButtonModule,
  MatIconModule,
  MatDividerModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  FlexLayoutModule,
  _MatMenuDirectivesModule,
  MatMenuModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule,
  HighchartsChartModule,
  RouterModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...reExportingModules
  ],
  exports: [
    ...reExportingModules
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}
  ]
})
export class MaterialModule {
}
