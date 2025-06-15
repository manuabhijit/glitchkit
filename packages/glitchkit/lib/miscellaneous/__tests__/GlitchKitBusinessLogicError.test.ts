import GlitchKitBaseError from '../../baseGlitchKit/GlitchKitBaseError';
import GlitchKitBusinessLogicError from '../GlitchKitBusinessLogicError';

describe('GlitchKitBusinessLogicError', () => {
  it('should be instance of GlitchKitBusinessLogicError and GlitchKitBaseError', () => {
    const err = new GlitchKitBusinessLogicError('Business logic failed', 1001);
    expect(err).toBeInstanceOf(GlitchKitBusinessLogicError);
    expect(err).toBeInstanceOf(GlitchKitBaseError);
    expect(err).toBeInstanceOf(Error);
  });

  it('should set message and errorCode correctly', () => {
    const err = new GlitchKitBusinessLogicError('Some error', 42);
    expect(err.message).toBe('Some error');
    expect((err as any).errorCode).toBe(42);
  });

  it('should set prototype correctly', () => {
    const err = new GlitchKitBusinessLogicError('Proto test');
    expect(Object.getPrototypeOf(err)).toBe(GlitchKitBusinessLogicError.prototype);
  });

  it('should capture stack trace', () => {
    const err = new GlitchKitBusinessLogicError('Stack trace test');
    expect(err.stack).toContain('GlitchKitBusinessLogicError');
  });

  describe('isInstance', () => {
    it('should return true for GlitchKitBusinessLogicError instance', () => {
      const err = new GlitchKitBusinessLogicError('Test');
      expect(GlitchKitBusinessLogicError.isInstance(err)).toBe(true);
    });
  });
});
