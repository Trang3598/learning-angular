import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {uniqueValidator} from "../../../shared/utility/email.validator";
import {ApiService} from "../../../services/api.service";
import {User} from "../../../model/user";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  editUserForm: FormGroup;
  id: number;
  email: string;
  password: string;
  name: string;

  constructor(private dialogRef: MatDialogRef<EditUserComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private formBuilder: FormBuilder, private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.editUserForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(6)]),
      email: this.formBuilder.control('', [Validators.required, Validators.email], [uniqueValidator(this.apiService)]),
      password: this.formBuilder.control('', [Validators.required, Validators.minLength(6)]),
    });
  }

  closeDialog(): void{
    this.dialogRef.close();
  }

  updateUser(id: number, name: string, email: string, password: string) {
    console.log(name);
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    if (!id && !name && !email && !password) {
      this.apiService.updateUser({id, name, email, password} as User).subscribe(res => {
        this.closeDialog();
      }, error => {
        console.log(error);
      });
    }
  }

  onSubmit(): void {
    console.log(this.editUserForm);
  }
}
