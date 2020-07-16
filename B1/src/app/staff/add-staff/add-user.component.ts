import {Component, Inject, Input, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  @Input() accept = 'image/*';
  @Input() title = 'Thêm nhân viên';

  constructor(private dialogRef: MatDialogRef<AddUserComponent>) {
  }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close();
  }

  save() {
  }
}
