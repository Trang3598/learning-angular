import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QuestionComponent} from "./survey/question/question.component";
import {AnswerComponent} from "./survey/question/option/answer/answer.component";
import {StaffComponent} from "./staff/staff.component";
import {SurveyComponent} from "./survey/survey.component";
import {ManageSurveyComponent} from "./manage-survey/manage-survey.component";
import {AddSurveyComponent} from "./manage-survey/add-survey/add-survey.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {EditSurveyComponent} from "./manage-survey/edit-survey/edit-survey.component";

const routes: Routes = [
  {path: '', redirectTo: 'khao-sat', pathMatch: 'full'},
  {path: 'khao-sat', component: SurveyComponent},
  {path: 'questions', component: QuestionComponent},
  {path: 'answers', component: AnswerComponent},
  {path: 'danh-sach-nhan-vien', component: StaffComponent},
  {path: 'quan-li-cong-viec-khao-sat', component: ManageSurveyComponent},
  {path: 'them-viec-khao-sat', component: AddSurveyComponent},
  {path: 'sua-cong-viec-khao-sat', component: EditSurveyComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
