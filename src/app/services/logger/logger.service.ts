import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  messages: string[] = [];
  constructor() {
    console.log('this is initialized')
   }
  logging(message: string) {
    this.messages.push(message);
    console.log(this.messages);
  }


}
