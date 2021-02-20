import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-schedule-list-item',
  templateUrl: './schedule-list-item.component.html',
  styleUrls: ['./schedule-list-item.component.scss']
})
export class ScheduleListItemComponent implements OnInit {

  @Input() name: string;

  constructor() {
    this.name = '';
  }

  ngOnInit(): void {
  }

}
