import { GlitchKitBaseDatabaseError } from '../../baseGlitchKit/GlitchKitBaseDatabaseError';

class GlitchKitInvalidEnumValueError extends GlitchKitBaseDatabaseError {
  constructor(message: string, errorCode?: number) {
    super(message, errorCode);
    Object.setPrototypeOf(this, GlitchKitInvalidEnumValueError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitInvalidEnumValueError;
  }
}

export default GlitchKitInvalidEnumValueError;
