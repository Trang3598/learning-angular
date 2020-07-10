import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {SurveyService} from "../services/survey/survey.service";

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit, OnDestroy {

  surveys: any = [];
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private httpClient: HttpClient, private surveyService: SurveyService) {
  }

  ngOnInit() {
    this.surveyService.sendGetRequest().pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>) => {
      this.surveys = res.body;
    })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
