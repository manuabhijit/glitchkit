import GlitchKitBaseError from '../baseGlitchKit/GlitchKitBaseError';

class GlitchKitUnhandledExceptionExitError extends GlitchKitBaseError {
  constructor(message: string, errorCode?: number) {
    super(message, errorCode);
    Object.setPrototypeOf(this, GlitchKitUnhandledExceptionExitError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitUnhandledExceptionExitError;
  }
}

export default GlitchKitUnhandledExceptionExitError;
