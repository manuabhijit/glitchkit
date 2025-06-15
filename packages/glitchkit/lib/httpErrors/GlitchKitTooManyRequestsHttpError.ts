import GlitchKitBaseHttpError from '../baseGlitchKit/GlitchKitBaseHttpError';

class GlitchKitTooManyRequestsHttpError extends GlitchKitBaseHttpError {
  constructor(message: string, errorCode?: number) {
    super(message, 429, errorCode);
    this.name = 'GlitchKitTooManyRequestsHttpError';
    Object.setPrototypeOf(this, GlitchKitTooManyRequestsHttpError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
  static isInstance(error: unknown): error is GlitchKitTooManyRequestsHttpError {
    return error instanceof GlitchKitTooManyRequestsHttpError;
  }
}

export default GlitchKitTooManyRequestsHttpError;
