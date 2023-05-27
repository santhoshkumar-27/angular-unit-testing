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
  it('should not have any message at starting', () => {
    expect(service.length).toEqual(0)
  });
  it('should be messages count is equal to one', () => {
    service.logging('message');
    expect(service.length).toEqual(1)
  });

  it('should clear the loggs', () => {
    service.logging('message');
    service.clearLog();
    expect(service.length).toEqual(0)
  });
});
