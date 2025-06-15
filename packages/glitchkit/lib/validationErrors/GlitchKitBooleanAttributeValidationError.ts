import GlitchKitBaseValidationError from '../baseGlitchKit/GlitchKitBaseValidationError';

class GlitchKitBooleanAttributeValidationError extends GlitchKitBaseValidationError {
  constructor(message: string, errorCode?: number) {
    super(message, errorCode);
    this.name = 'GlitchKitBooleanAttributeValidationError';
    Object.setPrototypeOf(this, GlitchKitBooleanAttributeValidationError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitBooleanAttributeValidationError;
  }
}

export default GlitchKitBooleanAttributeValidationError;
