import GlitchKitBaseHttpError from '../baseGlitchKit/GlitchKitBaseHttpError';

class GlitchKitUriTooLongHttpError extends GlitchKitBaseHttpError {
  constructor(message: string, errorCode?: number) {
    super(message, 414, errorCode);
    this.name = 'GlitchKitUriTooLongHttpError';
    Object.setPrototypeOf(this, GlitchKitUriTooLongHttpError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitUriTooLongHttpError;
  }
}

export default GlitchKitUriTooLongHttpError;
