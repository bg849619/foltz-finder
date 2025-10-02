import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Message {
  constructor(private http: HttpClient) { }

  submitMessage(message: string, signature: string): Observable<any> {
    const url = 'https://foltz-messages-service.jbgall.workers.dev/api/messages';
    const body = { message, author: signature };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(url, body, { headers });
  }
}
