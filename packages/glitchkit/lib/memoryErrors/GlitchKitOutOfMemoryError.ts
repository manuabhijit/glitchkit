import GlitchKitBaseError from '../baseGlitchKit/GlitchKitBaseError';

class GlitchKitOutOfMemoryError extends GlitchKitBaseError {
  constructor(message: string, errorCode?: number) {
    super(message, errorCode);
    Object.setPrototypeOf(this, GlitchKitOutOfMemoryError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitOutOfMemoryError;
  }
}

export default GlitchKitOutOfMemoryError;
