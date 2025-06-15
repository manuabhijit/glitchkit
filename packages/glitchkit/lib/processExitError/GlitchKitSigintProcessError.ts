import GlitchKitBaseError from '../baseGlitchKit/GlitchKitBaseError';

class GlitchKitSigintProcessError extends GlitchKitBaseError {
  constructor(message: string, errorCode?: number) {
    super(message, errorCode);
    Object.setPrototypeOf(this, GlitchKitSigintProcessError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitSigintProcessError;
  }
}

export default GlitchKitSigintProcessError;
