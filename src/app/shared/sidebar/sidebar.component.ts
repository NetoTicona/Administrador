import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/service.indice';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor( public _sSideBar:SidebarService  ) {
    
   }

  ngOnInit() {
  }

}
