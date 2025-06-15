import GlitchKitBaseValidationError from '../baseGlitchKit/GlitchKitBaseValidationError';

class GlitchKitObjectAttributeValidationError extends GlitchKitBaseValidationError<Object> {
  constructor(message: string, errorCode?: number) {
    super(message, errorCode);
    Object.setPrototypeOf(this, GlitchKitObjectAttributeValidationError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitObjectAttributeValidationError;
  }
}

export default GlitchKitObjectAttributeValidationError;
