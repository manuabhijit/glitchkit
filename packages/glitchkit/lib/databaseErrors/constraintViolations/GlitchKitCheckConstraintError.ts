import { GlitchKitBaseDatabaseError } from '../../baseGlitchKit/GlitchKitBaseDatabaseError';

class GlitchKitCheckConstraintError extends GlitchKitBaseDatabaseError {
  constructor(message: string, errorCode?: number) {
    super(message, errorCode);
    Object.setPrototypeOf(this, GlitchKitCheckConstraintError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitCheckConstraintError;
  }
}

export default GlitchKitCheckConstraintError;
