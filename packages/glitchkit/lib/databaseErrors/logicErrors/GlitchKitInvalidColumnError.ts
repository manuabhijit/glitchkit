import GlitchKitBaseDatabaseError from '../../baseGlitchKit/GlitchKitBaseDatabaseError';

class GlitchKitInvalidColumnError extends GlitchKitBaseDatabaseError {
  constructor(message: string, errorCode?: number) {
    super(message, errorCode);
    Object.setPrototypeOf(this, GlitchKitInvalidColumnError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitInvalidColumnError;
  }
}

export default GlitchKitInvalidColumnError;
