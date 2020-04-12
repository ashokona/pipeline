import { Component, ViewChild, AfterViewInit, Renderer2 } from '@angular/core';
import { Moment } from 'moment';
import { MatCalendar } from '@angular/material';

@Component({
  selector: 'cops-full-calendar',
  templateUrl: './full-calendar.component.html',
  styleUrls: ['./full-calendar.component.scss']
})
export class FullCalendarComponent implements AfterViewInit {

   @ViewChild('calendar', null) calendar: MatCalendar<Moment>;
 
   selectedDate: Moment;
 
   constructor(private renderer: Renderer2) {
   }
 
   monthSelected(date) {
     alert(`Selected: ${date}`);
   }
 
   onDateChanged(date) {
     alert(`Selected: ${date}`);
   }
 
   ngAfterViewInit() {
     // Find all arrow buttons in the calendar
     let buttons = document.querySelectorAll('mat-calendar mat-calendar-header button');
 
     if (buttons) {
       // Listen for click event
       Array.from(buttons).forEach(button => {
         this.renderer.listen(button, "click", () => {
           alert('Arrow button clicked');
         });
       })
     }
   }
 }
 
