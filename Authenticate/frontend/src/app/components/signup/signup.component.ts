import {Component, OnInit} from '@angular/core';
import {SignupService} from "../../services/signup.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public error = [];
  public form = {
    name: null,
    email: null,
    password: null,
    confirm: null,
  }


  constructor(private signupService: SignupService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.signupService.signUp(this.form).subscribe();
  }
}
