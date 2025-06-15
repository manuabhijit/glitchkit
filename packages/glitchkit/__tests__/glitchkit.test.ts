import { fn } from '../lib/glitchkit';

describe('glitchkit', () => {
  it('should return the correct greeting', () => {
    expect(fn()).toBe('Hello from glitchkit');
  });
});
