import { Component, Output, EventEmitter } from '@angular/core';
import { Guest } from '../guest';
import { GuestList } from '../guest-list';

@Component({
  selector: 'app-finder',
  imports: [],
  templateUrl: './finder.html',
  styleUrl: './finder.css'
})
export class Finder {
  public guestSearch: Guest[] = [];
  public tableGuests: Guest[] = [];
  public guestQuery: String = "";
  public selectedGuest: Guest | null = null;
  public guestList: Guest[] = [];

  @Output() guestSelected = new EventEmitter<Guest>();

  constructor(private guestListService: GuestList) { 
    this.guestList = this.guestListService.guestList;
  }

  selectGuest(guest: Guest) {
    this.selectedGuest = guest;
    this.guestQuery = guest.name;
    this.tableGuests = this.guestList.filter(g => g.table === guest.table && g.name !== guest.name);
    this.guestSearch = [];
    this.guestSelected.emit(guest);
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
