import GlitchKitBaseHttpError from '../baseGlitchKit/GlitchKitBaseHttpError';

class GlitchKitInternalServerHttpError extends GlitchKitBaseHttpError {
  constructor(message: string, errorCode?: number) {
    super(message, 500, errorCode);
    this.name = 'GlitchKitInternalServerHttpError';

    Object.setPrototypeOf(this, GlitchKitInternalServerHttpError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  static isInstance(error: unknown): error is GlitchKitInternalServerHttpError {
    return error instanceof GlitchKitInternalServerHttpError;
  }
}

export default GlitchKitInternalServerHttpError;
