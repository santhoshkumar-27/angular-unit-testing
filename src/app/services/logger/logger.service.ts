import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  private messages: string[] = [];
  constructor() {
  }
  logging(message: string) {
    this.messages.push(message);
  }
  clearLog() {
    this.messages.length = 0;
  }
  get length() {
    return this.messages.length;
  }
}
