import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import trLocale from '@fullcalendar/core/locales/tr';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  //date = Date.now();

  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth, timeGridWeek, timeGridDay, listWeek, listMonth'
    },
    locales: [trLocale],
    locale: 'tr',
    initialView: 'dayGridMonth',
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    droppable: true,
    dateClick: this.handleDateClick.bind(this),
    eventClick: this.handleEventClick.bind(this),
    events: 'https://fullcalendar.io/demo-events.json'
  };

  handleEventClick(arg: any) {
    alert('Event seçildi! ' + arg.title)
  }

  handleDateClick(arg: any) {
    alert('Tarih seçildi! ' + arg.dateStr)
  }

  constructor() { }

  ngOnInit(): void {
    
  }
}
