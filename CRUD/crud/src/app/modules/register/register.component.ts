import {Component, OnInit} from '@angular/core';
import {EmailValidator, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../services/api.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  validator: EmailValidator

  constructor(private apiService: ApiService, private formBuilder: FormBuilder, private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required, this.validator]

    })
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {

  }

}
