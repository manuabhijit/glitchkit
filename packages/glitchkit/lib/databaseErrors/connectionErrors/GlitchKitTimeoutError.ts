import GlitchKitBaseDatabaseError from '../../baseGlitchKit/GlitchKitBaseDatabaseError';

class GlitchKitTimeoutError extends GlitchKitBaseDatabaseError {
  constructor(message: string, errorCode?: number) {
    super(message, errorCode);
    Object.setPrototypeOf(this, GlitchKitTimeoutError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitTimeoutError;
  }
}

export default GlitchKitTimeoutError;
