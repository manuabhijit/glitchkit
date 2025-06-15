import GlitchKitBaseError from '../baseGlitchKit/GlitchKitBaseError';

class GlitchKitBadAllocError extends GlitchKitBaseError {
  constructor(message: string = 'Bad memory allocation', errorCode?: number) {
    super(message, errorCode);
    Object.setPrototypeOf(this, GlitchKitBadAllocError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitBadAllocError;
  }
}

export default GlitchKitBadAllocError;
