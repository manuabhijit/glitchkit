import GlitchKitBaseError from '../baseGlitchKit/GlitchKitBaseError';

class GlitchKitStackOverflowError extends GlitchKitBaseError {
  constructor(message: string = 'Stack overflow', errorCode?: number) {
    super(message, errorCode);
    Object.setPrototypeOf(this, GlitchKitStackOverflowError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitStackOverflowError;
  }
}

export default GlitchKitStackOverflowError;
