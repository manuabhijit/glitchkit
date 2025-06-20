import GlitchKitBaseHttpError from '../baseGlitchKit/GlitchKitBaseHttpError';

class GlitchKitTooManyRequestsHttpError extends GlitchKitBaseHttpError {
  constructor(message: string, errorCode?: number) {
    super(message, 429, errorCode);
    Object.setPrototypeOf(this, GlitchKitTooManyRequestsHttpError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitTooManyRequestsHttpError;
  }
}

export default GlitchKitTooManyRequestsHttpError;
