import GlitchKitBaseHttpError from '../baseGlitchKit/GlitchKitBaseHttpError';

class GlitchKitInternalServerErrorHttpError extends GlitchKitBaseHttpError {
  constructor(message: string, errorCode?: number) {
    super(message, 500, errorCode);
    this.name = 'GlitchKitInternalServerErrorHttpError';
    Object.setPrototypeOf(this, GlitchKitInternalServerErrorHttpError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
  static isInstance(error: unknown): error is GlitchKitInternalServerErrorHttpError {
    return error instanceof GlitchKitInternalServerErrorHttpError;
  }
}

export default GlitchKitInternalServerErrorHttpError;
