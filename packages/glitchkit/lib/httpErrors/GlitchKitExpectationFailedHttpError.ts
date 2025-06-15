import GlitchKitBaseHttpError from '../baseGlitchKit/GlitchKitBaseHttpError';

class GlitchKitExpectationFailedHttpError extends GlitchKitBaseHttpError {
  constructor(message: string, errorCode?: number) {
    super(message, 417, errorCode);
    this.name = 'GlitchKitExpectationFailedHttpError';
    Object.setPrototypeOf(this, GlitchKitExpectationFailedHttpError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
  static isInstance(error: unknown): error is GlitchKitExpectationFailedHttpError {
    return error instanceof GlitchKitExpectationFailedHttpError;
  }
}

export default GlitchKitExpectationFailedHttpError;
