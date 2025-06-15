import GlitchKitBaseHttpError from '../baseGlitchKit/GlitchKitBaseHttpError';

class GlitchKitFailedDependencyHttpError extends GlitchKitBaseHttpError {
  constructor(message: string, errorCode?: number) {
    super(message, 424, errorCode);
    Object.setPrototypeOf(this, GlitchKitFailedDependencyHttpError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitFailedDependencyHttpError;
  }
}

export default GlitchKitFailedDependencyHttpError;
