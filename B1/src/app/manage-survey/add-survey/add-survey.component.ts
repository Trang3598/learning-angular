import {Component, OnInit} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {Dynamic} from "../../../models/grid";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-survey',
  templateUrl: './add-survey.component.html',
  styleUrls: ['./add-survey.component.css']
})
export class AddSurveyComponent implements OnInit {
  labelPosition: 'before' | 'after' = 'after';
  dynamicArray: Array<Dynamic> = [];
  newDynamic: any = {};
  questions: Array<Dynamic> = [];
  newQuestions: any = {};

  constructor(private toastr: ToastrService) {
  }

  handleError(error) {
    this.toastr.error(error.message);
    // throw error;  // Remove this line
  }

  ngOnInit(): void {
    this.newDynamic = {option: ""};
    this.newQuestions = {question: ""};
    this.dynamicArray.push(this.newDynamic);
    this.questions.push(this.newQuestions);
  }

  addOption(index) {
    this.dynamicArray.push(this.newDynamic);
    return true;
  }

  removeOption(index) {
    if (this.dynamicArray.length == 1) {
      return false;
    } else {
      this.dynamicArray.splice(index, 1);
      return true;
    }
  }

  addQuestion(index) {
    this.questions.push(this.newQuestions);
    return true;
  }

  removeQuestion(index) {
    if (this.questions.length == 1) {
      return false;
    } else {
      this.questions.splice(index, 1);
      return true;
    }
  }
  submitSurveyForm(data){
    console.log(data)
  }
}
