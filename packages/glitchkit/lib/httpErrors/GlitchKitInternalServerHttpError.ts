import GlitchKitBaseHttpError from '../baseGlitchKit/GlitchKitBaseHttpError';

class GlitchKitInternalServerHttpError extends GlitchKitBaseHttpError {
  constructor(message: string, errorCode?: number) {
    super(message, 500, errorCode);
    Object.setPrototypeOf(this, GlitchKitInternalServerHttpError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitInternalServerHttpError;
  }
}

export default GlitchKitInternalServerHttpError;
