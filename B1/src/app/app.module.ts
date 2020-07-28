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
import {ListUserComponent} from "./survey/question/option/answer/list-user/list-user.component";
import {EditStaffComponent} from "./staff/edit-staff/edit-staff.component";
import {ManageSurveyComponent} from './manage-survey/manage-survey.component';
import {AddSurveyComponent} from './manage-survey/add-survey/add-survey.component';
import {EditSurveyComponent} from './manage-survey/edit-survey/edit-survey.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {A11yModule} from '@angular/cdk/a11y';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {ToastrModule, ToastrService} from "ngx-toastr";
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {FormsModule} from "@angular/forms";

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
        ManageSurveyComponent,
        AddSurveyComponent,
        EditSurveyComponent,
        PageNotFoundComponent,
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
        MatAutocompleteModule,
        MatDatepickerModule,
        A11yModule,
        ClipboardModule,
        CdkStepperModule,
        CdkTableModule,
        CdkTreeModule,
        DragDropModule,
        MatAutocompleteModule,
        MatBadgeModule,
        MatBottomSheetModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatStepperModule,
        MatDatepickerModule,
        MatDialogModule,
        MatDividerModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatTreeModule,
        PortalModule,
        ScrollingModule,
        ToastrModule.forRoot(),
        FormsModule,
    ],
    providers: [
        ToastrService,
    ],
    exports: [
        AddUserComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

//typescript module
