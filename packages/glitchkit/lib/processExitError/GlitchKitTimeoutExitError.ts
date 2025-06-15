import GlitchKitBaseError from '../baseGlitchKit/GlitchKitBaseError';

class GlitchKitTimeoutExitError extends GlitchKitBaseError {
  constructor(message: string, errorCode?: number) {
    super(message, errorCode);
    Object.setPrototypeOf(this, GlitchKitTimeoutExitError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitTimeoutExitError;
  }
}

export default GlitchKitTimeoutExitError;
