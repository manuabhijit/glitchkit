import GlitchKitBaseError from '../baseGlitchKit/GlitchKitBaseError';

class GlitchKitHeapOverflowError extends GlitchKitBaseError {
  constructor(message: string = 'Heap overflow', errorCode?: number) {
    super(message, errorCode);
    Object.setPrototypeOf(this, GlitchKitHeapOverflowError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitHeapOverflowError;
  }
}

export default GlitchKitHeapOverflowError;
