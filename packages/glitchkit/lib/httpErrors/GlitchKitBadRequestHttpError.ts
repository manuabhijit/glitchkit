import GlitchKitBaseHttpError from '../baseGlitchKit/GlitchKitBaseHttpError';

class GlitchKitBadRequestHttpError extends GlitchKitBaseHttpError {
  constructor(message: string, errorCode?: number) {
    super(message, 400, errorCode);
    this.name = 'GlitchKitBadRequestHttpError';

    Object.setPrototypeOf(this, GlitchKitBadRequestHttpError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitBadRequestHttpError;
  }
}

export default GlitchKitBadRequestHttpError;
