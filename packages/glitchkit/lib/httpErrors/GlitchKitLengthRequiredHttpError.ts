import GlitchKitBaseHttpError from '../baseGlitchKit/GlitchKitBaseHttpError';

class GlitchKitLengthRequiredHttpError extends GlitchKitBaseHttpError {
  constructor(message: string, errorCode?: number) {
    super(message, 411, errorCode);
    this.name = 'GlitchKitLengthRequiredHttpError';
    Object.setPrototypeOf(this, GlitchKitLengthRequiredHttpError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitLengthRequiredHttpError;
  }
}

export default GlitchKitLengthRequiredHttpError;
