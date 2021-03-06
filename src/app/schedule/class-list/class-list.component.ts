import { Component, OnInit } from '@angular/core';
import {ClassItem} from './class/class.interface';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.scss']
})
export class ClassListComponent implements OnInit {

  classListItems: ClassItem[];

  constructor() {
    this.classListItems = [
      {
        name: 'CMPT141',
        id: '123',
      },
      {
        name: 'CMPT145',
        id: '456'
      },
    ];
  }


  ngOnInit(): void {
  }

}
