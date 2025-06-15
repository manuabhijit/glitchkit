import GlitchKitBaseValidationError from '../baseGlitchKit/GlitchKitBaseValidationError';

class GlitchKitBooleanAttributeValidationError extends GlitchKitBaseValidationError<boolean> {
  constructor(message: string, errorCode?: number) {
    super(message, errorCode);
    Object.setPrototypeOf(this, GlitchKitBooleanAttributeValidationError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitBooleanAttributeValidationError;
  }
}

export default GlitchKitBooleanAttributeValidationError;
