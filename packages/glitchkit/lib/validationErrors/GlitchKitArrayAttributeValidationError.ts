import GlitchKitBaseValidationError from '../baseGlitchKit/GlitchKitBaseValidationError';

class GlitchKitArrayAttributeValidationError extends GlitchKitBaseValidationError {
  constructor(message: string, errorCode?: number) {
    super(message, errorCode);
    this.name = 'GlitchKitArrayAttributeValidationError';
    Object.setPrototypeOf(this, GlitchKitArrayAttributeValidationError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitArrayAttributeValidationError;
  }
}

export default GlitchKitArrayAttributeValidationError;
