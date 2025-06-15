import GlitchKitBaseHttpError from '../baseGlitchKit/GlitchKitBaseHttpError';

class GlitchKitHttpVersionNotSupportedHttpError extends GlitchKitBaseHttpError {
  constructor(message: string, errorCode?: number) {
    super(message, 505, errorCode);
    this.name = 'GlitchKitHttpVersionNotSupportedHttpError';
    Object.setPrototypeOf(this, GlitchKitHttpVersionNotSupportedHttpError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
  static isInstance(error: unknown): error is GlitchKitHttpVersionNotSupportedHttpError {
    return error instanceof GlitchKitHttpVersionNotSupportedHttpError;
  }
}

export default GlitchKitHttpVersionNotSupportedHttpError;
