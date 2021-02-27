import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {TopbarComponent} from './topbar/topbar.component';
import {ScheduleComponent} from './schedule/schedule.component';
import {ScheduleListComponent} from './home/schedule-list/schedule-list.component';
import {ScheduleListItemComponent} from './home/schedule-list/schedule-list-item/schedule-list-item.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { ClassListComponent } from './schedule/class-list/class-list.component';
import { ClassComponent } from './schedule/class-list/class/class.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopbarComponent,
    ScheduleComponent,
    ScheduleListComponent,
    ScheduleListItemComponent,
    ClassListComponent,
    ClassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
