import {Component, Input, OnInit} from '@angular/core';
import {element} from "protractor";

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {
  @Input() options: []
  @Input() type: number;
  @Input() questionID: number;
  @Input() optionId: number;
  constructor() {
  }

  ngOnInit(): void {

  }
}
