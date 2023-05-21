import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Mist Middle';
  isSidebarLeft! : boolean;

  toggleLeftSidebar(event:boolean){
    this.isSidebarLeft = event;
    
  }
}
