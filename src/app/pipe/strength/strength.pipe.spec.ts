import { StrengthPipe } from './strength.pipe';

describe('StrengthPipe', () => {
  let pipe: StrengthPipe;
  beforeEach(() => {
    pipe = new StrengthPipe();
  })
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('should check the value is weak', () => {
    const result = pipe.transform(5);
    expect(result).toBe('5 (weak)')
  })
  it('should check the value is strong', () => {
    const result = pipe.transform(15);
    expect(result).toBe('15 (strong)')
  })
  it('should check the value is strongest', () => {
    const result = pipe.transform(25);
    expect(result).toBe('25 (strongest)')
  })
});
