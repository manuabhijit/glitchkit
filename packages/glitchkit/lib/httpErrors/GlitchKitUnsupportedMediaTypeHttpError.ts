import GlitchKitBaseHttpError from '../baseGlitchKit/GlitchKitBaseHttpError';

class GlitchKitUnsupportedMediaTypeHttpError extends GlitchKitBaseHttpError {
  constructor(message: string, errorCode?: number) {
    super(message, 415, errorCode);
    this.name = 'GlitchKitUnsupportedMediaTypeHttpError';
    Object.setPrototypeOf(this, GlitchKitUnsupportedMediaTypeHttpError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
  static isInstance(error: unknown): error is GlitchKitUnsupportedMediaTypeHttpError {
    return error instanceof GlitchKitUnsupportedMediaTypeHttpError;
  }
}

export default GlitchKitUnsupportedMediaTypeHttpError;
