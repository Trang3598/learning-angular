import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthenticationService} from "../../../services/authentication.service";
import {Router} from "@angular/router";
import {User} from "../../../model/user";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() toggle: EventEmitter<any> = new EventEmitter();
  currentUser: User;

  constructor(private authenticationService: AuthenticationService, private router: Router) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit(): void {
  }

  toggleSideBar() {
    this.toggle.emit();
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/dang-nhap']);
  }
}
