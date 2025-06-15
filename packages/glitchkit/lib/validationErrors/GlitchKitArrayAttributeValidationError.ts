import GlitchKitBaseValidationError from '../baseGlitchKit/GlitchKitBaseValidationError';

class GlitchKitArrayAttributeValidationError extends GlitchKitBaseValidationError<unknown[]> {
  constructor(message: string, errorCode?: number) {
    super(message, errorCode);
    Object.setPrototypeOf(this, GlitchKitArrayAttributeValidationError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitArrayAttributeValidationError;
  }
}

export default GlitchKitArrayAttributeValidationError;
