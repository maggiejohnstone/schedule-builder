import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schedule-list-item',
  templateUrl: './schedule-list-item.component.html',
  styleUrls: ['./schedule-list-item.component.scss']
})
export class ScheduleListItemComponent implements OnInit {

  @Input() name: string;
  @Input() id: string;

  constructor() {
    this.name = '';
    this.id = '';
  }

  ngOnInit(): void {
  }

}
