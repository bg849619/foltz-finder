import { Component } from '@angular/core';
import { Finder } from '../finder/finder';
import { Guest } from '../guest';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-main-page',
  imports: [Finder, NgClass],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css'
})
export class MainPage {
  public ignoredGuests: String[] = [
    "Griffin Foltz",
    "Caroline Kohls"
  ];

  showMessagePopup: boolean = false;

  onGuestSelected(guest: Guest) {
    // Check the selected guest against the ignored list. Otherwise, prompt for a message.
    console.log('Guest selected:', guest);
    if (this.ignoredGuests.includes(guest.name)) {
      // Do nothing. This is supposed to be a surprise for them.
    } else {
      // Show the popup to let them send a message.
      this.showMessagePopup = true;
    }
  }
}
