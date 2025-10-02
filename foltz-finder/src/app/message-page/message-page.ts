import { Component } from '@angular/core';
import { MessageForm } from '../message-form/message-form';

@Component({
  selector: 'app-message-page',
  imports: [MessageForm],
  templateUrl: './message-page.html',
  styleUrl: './message-page.css'
})
export class MessagePage {
  
}
