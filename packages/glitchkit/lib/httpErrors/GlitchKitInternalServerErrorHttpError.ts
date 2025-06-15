import GlitchKitBaseHttpError from '../baseGlitchKit/GlitchKitBaseHttpError';

class GlitchKitInternalServerErrorHttpError extends GlitchKitBaseHttpError {
  constructor(message: string, errorCode?: number) {
    super(message, 500, errorCode);
    Object.setPrototypeOf(this, GlitchKitInternalServerErrorHttpError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitInternalServerErrorHttpError;
  }
}

export default GlitchKitInternalServerErrorHttpError;
