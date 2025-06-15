import GlitchKitBaseError from '../baseGlitchKit/GlitchKitBaseError';

class GlitchKitSigkillProcessError extends GlitchKitBaseError {
  constructor(message: string, errorCode?: number) {
    super(message, errorCode);
    Object.setPrototypeOf(this, GlitchKitSigkillProcessError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitSigkillProcessError;
  }
}

export default GlitchKitSigkillProcessError;
