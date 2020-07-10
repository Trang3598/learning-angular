import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {AnswersService} from "../../../../services/answer/answers.service";
import {StaffService} from "../../../../services/staff/staff.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ListUserComponent} from "./list-user/list-user.component";

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit, OnDestroy {

  answers = [];
  users = [];
  @Input() staffs = [];
  @Input() type: number;
  @Input() questionID: number;
  @Input() optionID: number;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private answersService: AnswersService, private dialog: MatDialog, private staffService: StaffService) {
  }

  ngOnInit() {

    this.answersService.sendGetRequest().pipe(takeUntil(this.destroy$)).subscribe((data: any[]) => {
      this.answers = data;
    })
  }

  countUser(questionId: number) {
    let sum = 0;
    this.answers.forEach(element => {
      element.questions.forEach(item => {
        if (item.id == questionId) {
          sum++;
        }
      })
    })
    return sum;
  }

  showListPeople(questionId: number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '400px'
    this.dialog.open(ListUserComponent, dialogConfig);

  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
