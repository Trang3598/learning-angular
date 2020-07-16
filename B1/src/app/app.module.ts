import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {StaffComponent} from './staff/staff.component';
import {AppRoutingModule} from './app-routing.module';
import {QuestionComponent} from "./survey/question/question.component";
import {AnswerComponent} from './survey/question/option/answer/answer.component';
import {HttpClientModule} from "@angular/common/http";
import {SurveyComponent} from './survey/survey.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {AddUserComponent} from "./staff/add-staff/add-user.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {OptionComponent} from './survey/question/option/option.component';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import { ListUserComponent} from "./survey/question/option/answer/list-user/list-user.component";
import { EditStaffComponent} from "./staff/edit-staff/edit-staff.component";

@NgModule({
  declarations: [
    AppComponent,
    StaffComponent,
    QuestionComponent,
    AnswerComponent,
    SurveyComponent,
    AddUserComponent,
    OptionComponent,
    ListUserComponent,
    EditStaffComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
