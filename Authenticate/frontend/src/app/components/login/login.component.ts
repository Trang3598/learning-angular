import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../services/login.service";
import {TokenService} from "../../services/token.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = {
    email: null,
    password: null
  }
  public error = [];

  constructor(private loginService: LoginService, private tokenService: TokenService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {

    this.loginService.login(this.form).subscribe(
      response => this.handleResponse(response)
    )
    ;
  }

  handleError(error) {
    this.error = error.msg
  }

  handleResponse(data) {
    this.tokenService.handle(data.token)
  }
}
