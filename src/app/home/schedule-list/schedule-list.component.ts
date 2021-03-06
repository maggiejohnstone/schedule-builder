import {Component, OnInit} from '@angular/core';
import {ScheduleListItem} from './schedule-list-item/schedule-list-item.interface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.scss']
})
export class ScheduleListComponent implements OnInit {

  scheduleListItems: ScheduleListItem[];

  constructor(private router: Router) {
    this.scheduleListItems = [
      {
        name: 'Fall 2020',
        id: '123',
      },
      {
        name: 'Winter 2021',
        id: '456'
      },
    ];
  }

  ngOnInit(): void {
  }

  redirectToSchedule(id: string): void {
    this.router.navigate([`schedule/${id}`]).then();
  }

}
