import GlitchKitBaseValidationError from '../baseGlitchKit/GlitchKitBaseValidationError';

class GlitchKitSchemaValidationError extends GlitchKitBaseValidationError {
  constructor(message: string, errorCode?: number) {
    super(message, errorCode);
    this.name = 'GlitchKitSchemaValidationError';
    Object.setPrototypeOf(this, GlitchKitSchemaValidationError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitSchemaValidationError;
  }
}

export default GlitchKitSchemaValidationError;
