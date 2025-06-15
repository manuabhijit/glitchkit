import GlitchKitBaseHttpError from '../baseGlitchKit/GlitchKitBaseHttpError';

class GlitchKitUnsupportedMediaTypeHttpError extends GlitchKitBaseHttpError {
  constructor(message: string, errorCode?: number) {
    super(message, 415, errorCode);
    Object.setPrototypeOf(this, GlitchKitUnsupportedMediaTypeHttpError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitUnsupportedMediaTypeHttpError;
  }
}

export default GlitchKitUnsupportedMediaTypeHttpError;
