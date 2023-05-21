import { Component, EventEmitter, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { NavMenu } from 'src/app/model/navMenu.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  @Output() isSidebarLeft: EventEmitter<boolean> = new EventEmitter();
  items!: MenuItem[];
  searchValue: string = '';

  ngOnInit() {
    this.items = NavMenu;
  }

  leftSidebar() {
    this.isSidebarLeft.emit(true);
  }
}