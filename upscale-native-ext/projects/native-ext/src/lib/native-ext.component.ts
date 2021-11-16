import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'lib-native-ext',
  templateUrl: './native-ext.component.html',
  styleUrls: ['./native-ext.component.scss'],
})
export class NativeExtComponent implements OnInit {
  txtName = '';
  txtEmail = '';

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    alert('Name - ' + this.txtName + ' - Email - ' + this.txtEmail);
  }

  onCancel(): void {}
}
