import GlitchKitBaseDatabaseError from '../../baseGlitchKit/GlitchKitBaseDatabaseError';

class GlitchKitAuthenticationFailedError extends GlitchKitBaseDatabaseError {
  constructor(message: string, errorCode?: number) {
    super(message, errorCode);
    Object.setPrototypeOf(this, GlitchKitAuthenticationFailedError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitAuthenticationFailedError;
  }
}

export default GlitchKitAuthenticationFailedError;
