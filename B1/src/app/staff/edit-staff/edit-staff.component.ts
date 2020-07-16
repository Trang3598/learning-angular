import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {element} from "protractor";

@Component({
  selector: 'app-edit-staff',
  templateUrl: './edit-staff.component.html',
  styleUrls: ['./edit-staff.component.css']
})
export class EditStaffComponent implements OnInit {
  @Input() accept = 'image/*';
  @Input() title = 'Sửa nhân viên';

  constructor(private dialogRef: MatDialogRef<EditStaffComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(data)
  }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
