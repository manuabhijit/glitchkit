import GlitchKitBaseError from '../baseGlitchKit/GlitchKitBaseError';

class GlitchKitBaseValidationError extends GlitchKitBaseError {
  constructor(message: string, errorCode?: number) {
    super(message, errorCode);
    this.name = 'GlitchKitBaseValidationError';
    Object.setPrototypeOf(this, GlitchKitBaseValidationError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitBaseValidationError;
  }
}

export default GlitchKitBaseValidationError;
