import GlitchKitBaseHttpError from '../baseGlitchKit/GlitchKitBaseHttpError';

class GlitchKitUpgradeRequiredHttpError extends GlitchKitBaseHttpError {
  constructor(message: string, errorCode?: number) {
    super(message, 426, errorCode);
    this.name = 'GlitchKitUpgradeRequiredHttpError';
    Object.setPrototypeOf(this, GlitchKitUpgradeRequiredHttpError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitUpgradeRequiredHttpError;
  }
}

export default GlitchKitUpgradeRequiredHttpError;
