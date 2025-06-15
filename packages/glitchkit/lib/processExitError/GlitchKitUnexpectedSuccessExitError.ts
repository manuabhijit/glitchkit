import GlitchKitBaseError from '../baseGlitchKit/GlitchKitBaseError';

class GlitchKitUnexpectedSuccessExitError extends GlitchKitBaseError {
  constructor(message: string, errorCode?: number) {
    super(message, errorCode);
    Object.setPrototypeOf(this, GlitchKitUnexpectedSuccessExitError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitUnexpectedSuccessExitError;
  }
}

export default GlitchKitUnexpectedSuccessExitError;
