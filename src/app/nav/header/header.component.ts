import { Component, EventEmitter, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { NavMenu } from 'src/app/model/navMenu.model';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { LoginComponent } from 'src/app/core/login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  providers: [DialogService],
})
export class HeaderComponent {
  @Output() isSidebarLeft: EventEmitter<boolean> = new EventEmitter();

  items!: MenuItem[];
  searchValue: string = '';

  ref!: DynamicDialogRef;

  ngOnInit() {
    this.items = NavMenu;
  }

  constructor(public dialogService: DialogService) {}

  leftSidebar() {
    this.isSidebarLeft.emit(true);
  }

  login() {
    this.ref = this.dialogService.open(LoginComponent, {
      header: 'Login/Sign-Up',
    });
  }
}
