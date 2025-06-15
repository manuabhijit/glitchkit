import GlitchKitBaseHttpError from '../baseGlitchKit/GlitchKitBaseHttpError';

class GlitchKitForbiddenHttpError extends GlitchKitBaseHttpError {
  constructor(message: string, errorCode?: number) {
    super(message, 403, errorCode);
    Object.setPrototypeOf(this, GlitchKitForbiddenHttpError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitForbiddenHttpError;
  }
}

export default GlitchKitForbiddenHttpError;
