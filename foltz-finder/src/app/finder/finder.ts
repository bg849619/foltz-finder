import { Component } from '@angular/core';
import { Guest } from '../guest';

@Component({
  selector: 'app-finder',
  imports: [],
  templateUrl: './finder.html',
  styleUrl: './finder.css'
})
export class Finder {
  public guestSearch: Guest[] = [];
  public guestQuery: String = "";
  public selectedGuest: Guest | null = null;
  public guestList: Guest[] = [
    {
      name: "Blake Gall",
      guests: 0,
      table: "B"
    },
    {
      name: "Caroline Kohls (Foltz?)",
      guests: 0,
      table: "A"
    },
    {
      name: "Griffin Foltz",
      guests: 0,
      table: "A"
    },
    {
      name: "Alex Snyder",
      guests: 1,
      table: "B"
    },
    {
      name: "Lauren Dryer",
      guests: 1,
      table: "A"
    },
    {
      name: "Gretchen Foltz",
      guests: 0,
      table: "1",
    },
    {
      name: "Jeff Kohls",
      guests: 0,
      table: "4",
    }
  ];

  selectGuest(guest: Guest) {
    this.selectedGuest = guest;
    this.guestQuery = guest.name;
    this.guestSearch = [];
  }

  searchGuests(event: any) {
    this.guestQuery = event.target.value;
    this.selectedGuest = null;
    if (this.guestQuery.length > 0) {
      this.guestSearch = this.guestList.filter(guest => guest.name.toLowerCase().includes(this.guestQuery.toLowerCase()));
    } else {
      this.guestSearch = [];
    }
  }
}
