import { GlitchKitBaseDatabaseError } from '../../baseGlitchKit/GlitchKitBaseDatabaseError';

class GlitchKitPlanLimitExceededError extends GlitchKitBaseDatabaseError {
  constructor(message: string, errorCode?: number) {
    super(message, errorCode);
    Object.setPrototypeOf(this, GlitchKitPlanLimitExceededError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitPlanLimitExceededError;
  }
}

export default GlitchKitPlanLimitExceededError;
