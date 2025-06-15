import GlitchKitBaseHttpError from '../baseGlitchKit/GlitchKitBaseHttpError';

class GlitchKitBadRequestHttpError extends GlitchKitBaseHttpError {
  constructor(message: string, errorCode?: number) {
    super(message, 400, errorCode);
    this.name = 'GlitchKitBadRequestHttpError';

    Object.setPrototypeOf(this, GlitchKitBadRequestHttpError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  static isInstance(error: unknown): error is GlitchKitBadRequestHttpError {
    return error instanceof GlitchKitBadRequestHttpError;
  }
}

export default GlitchKitBadRequestHttpError;
