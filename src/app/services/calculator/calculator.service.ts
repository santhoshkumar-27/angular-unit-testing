import { Injectable } from '@angular/core';
import { LoggerService } from '../logger/logger.service';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(
    private loggerService: LoggerService,
  ) { }

  add(n1: number, n2: number) {
    this.loggerService.logging(`add method triggerd with parameter ${n1} and ${n2}`)
    return n1 + n2;
  }

  subtract(n1: number, n2: number) {
    this.loggerService.logging(`subtract method triggerd with parameter ${n1} and ${n2}`)
    return n1 - n2;
  }

  divide(n1: number, n2: number) {
    if (n2 === 0) {
      this.loggerService.logging(`Error has been occured in divided due to ${n2} is zero`)
      return new Error('Second argument not gone be zero')
    }
    this.loggerService.logging(`devide method triggerd with parameter ${n1} and ${n2}`)
    return n1 / n2;
  }

  multiple(n1: number, n2: number) {
    this.loggerService.logging(`multiplication method triggerd with parameter ${n1} and ${n2}`)
    return n1 * n2;
  }
}
