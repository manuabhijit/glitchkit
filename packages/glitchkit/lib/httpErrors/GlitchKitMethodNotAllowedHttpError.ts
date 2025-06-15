import GlitchKitBaseHttpError from '../baseGlitchKit/GlitchKitBaseHttpError';

class GlitchKitMethodNotAllowedHttpError extends GlitchKitBaseHttpError {
  constructor(message: string, errorCode?: number) {
    super(message, 405, errorCode);
    this.name = 'GlitchKitMethodNotAllowedHttpError';
    Object.setPrototypeOf(this, GlitchKitMethodNotAllowedHttpError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
  static isInstance(error: unknown): error is GlitchKitMethodNotAllowedHttpError {
    return error instanceof GlitchKitMethodNotAllowedHttpError;
  }
}

export default GlitchKitMethodNotAllowedHttpError;
