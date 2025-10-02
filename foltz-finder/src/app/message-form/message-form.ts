import { Component } from '@angular/core';
import { Message } from '../message';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-message-form',
  imports: [FormsModule],
  templateUrl: './message-form.html',
  styleUrl: './message-form.css'
})
export class MessageForm {
  public message: string = '';
  public signature: string = '';
  public sending: boolean = false;
  public result: string = '';
  constructor(private messageService: Message) { }

  sendMessage(): void {
    if (this.sending) {
      return; // Prevent multiple submissions
    }

    if(this.message.trim() === '' || this.signature.trim() === '') {
      this.result = 'Please enter both a message and a signature.';
      return;
    }

    this.sending = true;
    this.result = '';
    this.messageService.submitMessage(this.message, this.signature).subscribe(
      response => {
        this.sending = false;
        console.log(response);
        this.result = 'Message sent successfully!';
      },
      error => {
        this.sending = false;
        console.error('Error sending message:', error);
        this.result = 'Failed to send message. Please try again later.';
      }
    );
  }
}
