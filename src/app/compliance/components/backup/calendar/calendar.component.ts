import { Component, ViewChild, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGrigPlugin from '@fullcalendar/timegrid';
// import interactionPlugin from '@fullcalendar/interaction'; // for dateClick

@Component({
  selector: 'cops-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  calendarEvents;
  calendarPlugins;

  calendarInit(){

    this.calendarEvents = [
      { title: 'event 1', date: '2019-09-01' },
      { title: 'event 2', date: '2019-09-05' },
      { title: 'event 3', date: '2019-09-09' },
      { title: 'event 4', date: '2019-09-17'},
    ];

    this.calendarPlugins = [dayGridPlugin];
  
  }

  

  constructor() { }

  ngOnInit() {
    this.calendarInit();
  }


}
