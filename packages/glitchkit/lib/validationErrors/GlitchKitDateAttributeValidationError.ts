import GlitchKitBaseValidationError from '../baseGlitchKit/GlitchKitBaseValidationError';

class GlitchKitDateAttributeValidationError extends GlitchKitBaseValidationError<Date> {
  constructor(message: string, errorCode?: number) {
    super(message, errorCode);
    this.name = 'GlitchKitDateAttributeValidationError';
    Object.setPrototypeOf(this, GlitchKitDateAttributeValidationError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitDateAttributeValidationError;
  }
}

export default GlitchKitDateAttributeValidationError;
