import GlitchKitBaseHttpError from '../baseGlitchKit/GlitchKitBaseHttpError';

class GlitchKitUpgradeRequiredHttpError extends GlitchKitBaseHttpError {
  constructor(message: string, errorCode?: number) {
    super(message, 426, errorCode);
    this.name = 'GlitchKitUpgradeRequiredHttpError';
    Object.setPrototypeOf(this, GlitchKitUpgradeRequiredHttpError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
  static isInstance(error: unknown): error is GlitchKitUpgradeRequiredHttpError {
    return error instanceof GlitchKitUpgradeRequiredHttpError;
  }
}

export default GlitchKitUpgradeRequiredHttpError;
