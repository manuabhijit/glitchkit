import { GlitchKitBaseDatabaseError } from '../../baseGlitchKit/GlitchKitBaseDatabaseError';

class GlitchKitAuthenticationFailedError extends GlitchKitBaseDatabaseError {
  constructor(message: string, errorCode?: number) {
    super(message, errorCode);
    Error.captureStackTrace(this, this.constructor);
  }

  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitAuthenticationFailedError;
  }
}

export default GlitchKitAuthenticationFailedError;
