import GlitchKitBaseValidationError from '../baseGlitchKit/GlitchKitBaseValidationError';

class GlitchKitObjectAttributeValidationError extends GlitchKitBaseValidationError {
  constructor(message: string, errorCode?: number) {
    super(message, errorCode);
    this.name = 'GlitchKitObjectAttributeValidationError';
    Object.setPrototypeOf(this, GlitchKitObjectAttributeValidationError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitObjectAttributeValidationError;
  }
}

export default GlitchKitObjectAttributeValidationError;
