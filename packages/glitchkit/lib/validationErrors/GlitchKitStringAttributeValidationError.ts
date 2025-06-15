import GlitchKitBaseValidationError from '../baseGlitchKit/GlitchKitBaseValidationError';

class GlitchKitStringAttributeValidationError extends GlitchKitBaseValidationError {
  constructor(message: string, errorCode?: number) {
    super(message, errorCode);
    this.name = 'GlitchKitStringAttributeValidationError';
    Object.setPrototypeOf(this, GlitchKitStringAttributeValidationError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitStringAttributeValidationError;
  }
}

export default GlitchKitStringAttributeValidationError;
