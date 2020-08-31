import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from "../../model/user";
import {ApiService} from "../../services/api.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {uniqueValidator} from "../../shared/utility/email.validator";
import {MatDialog} from "@angular/material/dialog";
import {EditUserComponent} from "./edit-user/edit-user.component";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[];
  email: string;
  password: string;
  name: string;
  displayedColumns: string[] = ['id', 'name', 'email', 'actions'];
  dataSource = new MatTableDataSource<User>(this.users);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  addUserForm: FormGroup;

  constructor(private apiService: ApiService, private fb: FormBuilder, private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.showUsers();
    this.dataSource.paginator = this.paginator;
    this.addUserForm = this.fb.group({
      name: this.fb.control('', [Validators.required, Validators.minLength(6)]),
      password: this.fb.control('', [Validators.required, Validators.minLength(6)]),
      email: this.fb.control('', [Validators.required, Validators.email], [uniqueValidator(this.apiService)])
    });
  }

  addUser(name: string, password: string, email: string): void {
    name = this.name;
    email = this.email;
    password = this.password;
    if (!name && !email && !password) {
      return;
    }
    this.apiService.addUser({name, password, email} as User)
      .subscribe(user => {
        console.log(user)
        this.users.push(user);
        alert('Add successfully');
        this.showUsers();
      }, error => {
        console.log(error);
      });
  }

  showUsers(): void {
    this.apiService.getUsers().subscribe(users => {
      this.users = users;
      this.dataSource.data = users;
    });
  }

  edit(user: User): void {
    console.log(user);
    const dialogRef = this.dialog.open(EditUserComponent, {
        width: '400px',
        data: user
      }
    );
    dialogRef.afterClosed().subscribe(result => {
      this.showUsers();
    });
  }

  delete(user: User): void {
    this.apiService.deleteUser(user).subscribe(res => {
      this.showUsers();
      alert('Delete successfully');
    }, error => {
      console.log(error);
    });
  }

  onSubmit() {
    console.log(this.addUserForm);
  }

  closeDialog() {

  }
}
