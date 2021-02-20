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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopbarComponent,
    ScheduleComponent,
    ScheduleListComponent,
    ScheduleListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
