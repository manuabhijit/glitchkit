import GlitchKitBaseHttpError from '../baseGlitchKit/GlitchKitBaseHttpError';

class GlitchKitGoneHttpError extends GlitchKitBaseHttpError {
  constructor(message: string, errorCode?: number) {
    super(message, 410, errorCode);
    this.name = 'GlitchKitGoneHttpError';
    Object.setPrototypeOf(this, GlitchKitGoneHttpError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
  static isInstance(error: unknown): error is GlitchKitGoneHttpError {
    return error instanceof GlitchKitGoneHttpError;
  }
}

export default GlitchKitGoneHttpError;
