import GlitchKitBaseHttpError from '../baseGlitchKit/GlitchKitBaseHttpError';

class GlitchKitMethodNotAllowedHttpError extends GlitchKitBaseHttpError {
  constructor(message: string, errorCode?: number) {
    super(message, 405, errorCode);
    Object.setPrototypeOf(this, GlitchKitMethodNotAllowedHttpError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitMethodNotAllowedHttpError;
  }
}

export default GlitchKitMethodNotAllowedHttpError;
