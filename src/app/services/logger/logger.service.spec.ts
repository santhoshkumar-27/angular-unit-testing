import { TestBed } from '@angular/core/testing';

import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  let service: LoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be logger the message from doing action in calculator', () => {
    service.messages = [];
    // spyOn(service, 'logging')
    service.logging('message');
    expect(service.messages.length).toEqual(1)
  });
});
