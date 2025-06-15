import GlitchKitBaseError from '../baseGlitchKit/GlitchKitBaseError';

class GlitchKitDependencyFailureExitError extends GlitchKitBaseError {
  constructor(message: string, errorCode?: number) {
    super(message, errorCode);
    Object.setPrototypeOf(this, GlitchKitDependencyFailureExitError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitDependencyFailureExitError;
  }
}

export default GlitchKitDependencyFailureExitError;
