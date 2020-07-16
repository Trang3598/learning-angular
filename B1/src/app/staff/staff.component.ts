import {Component, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {StaffService} from "../services/staff/staff.service";
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {HttpResponse} from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import {AddUserComponent} from "./add-staff/add-user.component";
import {EditStaffComponent} from "./edit-staff/edit-staff.component";

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit, OnDestroy {
  staffs = [];
  result: string;
  @Input() staff_id: number;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private staffService: StaffService, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.staffService.sendGetRequest().pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>) => {
      this.staffs = res.body;
    })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }

  public firstPage() {
    this.staffs = [];
    this.staffService.sendGetRequestToUrl(this.staffService.first).pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>) => {
      this.staffs = res.body;
    })
  }

  public previousPage() {

    if (this.staffService.prev !== undefined && this.staffService.prev !== '') {
      this.staffs = [];
      this.staffService.sendGetRequestToUrl(this.staffService.prev).pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>) => {
        this.staffs = res.body;
      })
    }

  }

  public nextPage() {
    if (this.staffService.next !== undefined && this.staffService.next !== '') {
      this.staffs = [];
      this.staffService.sendGetRequestToUrl(this.staffService.next).pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>) => {
        this.staffs = res.body;
      })
    }
  }

  public lastPage() {
    this.staffs = [];
    this.staffService.sendGetRequestToUrl(this.staffService.last).pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>) => {
      this.staffs = res.body;
    })
  }

  openDialog() {
    this.dialog.open(AddUserComponent,
      {
        width: '400px',
        height: '250px',
      });
  }

  edit(id: number) {
    this.dialog.open(EditStaffComponent,
      {
        width: '400px',
        height: '250px',
        data: {staffName: this.getNameStaff(id)}
      });
  }

  getNameStaff(id_staff: number) {
    this.staffs.forEach(element => {
      if (element.id === id_staff) {
        this.result = element.name
      }
    })
    return this.result;
  }
}
