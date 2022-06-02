import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  items: MenuItem[] = [];

  constructor(){}

  ngOnInit() {
    this.items = [
        {label: 'Update', icon: 'pi pi-refresh'},
        {label: 'Delete', icon: 'pi pi-times'},
        {label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io'},
        {separator: true},
        {label: 'Setup', icon: 'pi pi-cog', routerLink: ['/setup']}
    ];
}
}
