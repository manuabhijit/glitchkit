import GlitchKitBaseHttpError from '../baseGlitchKit/GlitchKitBaseHttpError';

class GlitchKitFailedDependencyHttpError extends GlitchKitBaseHttpError {
  constructor(message: string, errorCode?: number) {
    super(message, 424, errorCode);
    this.name = 'GlitchKitFailedDependencyHttpError';
    Object.setPrototypeOf(this, GlitchKitFailedDependencyHttpError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
  static isInstance(error: unknown): error is GlitchKitFailedDependencyHttpError {
    return error instanceof GlitchKitFailedDependencyHttpError;
  }
}

export default GlitchKitFailedDependencyHttpError;
