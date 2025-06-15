import GlitchKitBaseError from '../baseGlitchKit/GlitchKitBaseError';

class GlitchKitBufferOverflowError extends GlitchKitBaseError {
  constructor(message: string, errorCode?: number) {
    super(message, errorCode);
    Object.setPrototypeOf(this, GlitchKitBufferOverflowError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitBufferOverflowError;
  }
}

export default GlitchKitBufferOverflowError;
