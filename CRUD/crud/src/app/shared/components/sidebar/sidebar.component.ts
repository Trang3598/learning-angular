import {Component, OnInit} from '@angular/core';
import {User} from "../../../model/user";
import {ApiService} from "../../../services/api.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  user: User[];

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.getUserLogin();
  }

  getUserLogin() {
    return this.apiService.getAuthenticateUser().subscribe(user => {
      this.user = user;
    });
  }

}
