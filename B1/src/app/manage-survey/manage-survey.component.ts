import { Component, OnInit } from '@angular/core';
import {Subject} from "rxjs";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {SurveyService} from "../services/survey/survey.service";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-manage-survey',
  templateUrl: './manage-survey.component.html',
  styleUrls: ['./manage-survey.component.css']
})
export class ManageSurveyComponent implements OnInit {

  surveys: any = [];
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private httpClient: HttpClient, private surveyService: SurveyService) {
  }

  ngOnInit() {
    this.surveyService.sendGetRequest().pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>) => {
      this.surveys = res.body;
      console.log(this.surveys);
    })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
