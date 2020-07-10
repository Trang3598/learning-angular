import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QuestionComponent} from "./survey/question/question.component";
import {AnswerComponent} from "./survey/question/option/answer/answer.component";
import {StaffComponent} from "./staff/staff.component";
import {SurveyComponent} from "./survey/survey.component";

const routes: Routes = [
  {path: '', redirectTo: 'surveys', pathMatch: 'full'},
  {path: 'surveys', component: SurveyComponent},
  {path: 'questions', component: QuestionComponent},
  {path: 'answers', component: AnswerComponent},
  {path: 'staffs', component: StaffComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
