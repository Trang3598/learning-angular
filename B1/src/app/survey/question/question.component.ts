import {Component, Input, OnDestroy, OnInit, Output, EventEmitter, AfterViewInit, ViewChild} from '@angular/core';
import {takeUntil} from "rxjs/operators";
import {HttpResponse} from "@angular/common/http";
import {Subject} from "rxjs";
import {QuestionsService} from "../../services/question/questions.service";
import {OptionComponent} from "./option/option.component";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit, OnDestroy {
  questions = [];
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private questionsService: QuestionsService) {
  }

  ngOnInit() {
    this.questionsService.sendGetRequest().pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>) => {
      this.questions = res.body;
    })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
