import { GlitchKitBaseDatabaseError } from '../../baseGlitchKit/GlitchKitBaseDatabaseError';

class GlitchKitNotNullConstraintError extends GlitchKitBaseDatabaseError {
  constructor(message: string, errorCode?: number) {
    super(message, errorCode);
    Object.setPrototypeOf(this, GlitchKitNotNullConstraintError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitNotNullConstraintError;
  }
}

export default GlitchKitNotNullConstraintError;
