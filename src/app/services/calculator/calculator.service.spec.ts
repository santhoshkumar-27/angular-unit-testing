import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';
import { LoggerService } from '../logger/logger.service';

class MockLoggerService extends LoggerService {
  override messages: string[] = [];
  override logging(message: string): void {
    this.messages.push(message);
  }
}
describe('CalculatorService', () => {
  let service: CalculatorService;
  let loggerService: any;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: LoggerService, useClass: MockLoggerService },
      ]

    });
    service = TestBed.inject(CalculatorService);
    loggerService = TestBed.get(MockLoggerService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add two number', () => {
    // pending();
    // fail();
    const result = service.add(1, 2);
    expect(loggerService.logging).toHaveBeenCalledTimes(1);
    expect(result).toBe(3);
  })

  it('should subtract two number', () => {
    // pending();
    const result = service.subtract(2, 1);
    expect(result).toBe(1);
  })
});

/*
  beforeEach(async( () => {
        // Create jasmine spy object 
        sortServiceSpy = jasmine.createSpyObj('SortService', 'sortNumberData');
        // Provide the dummy/mock data to sortNumberData method.
        sortServiceSpy.sortNumberData.returnValue([someRandomArray]);
        TestBed.configureTestingModule({
                providers: [                   
                    { provide: SortService, useValue: sortServiceSpy},
                ]
        });
    ));
*/