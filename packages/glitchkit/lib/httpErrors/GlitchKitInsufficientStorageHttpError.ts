import GlitchKitBaseHttpError from '../baseGlitchKit/GlitchKitBaseHttpError';

class GlitchKitInsufficientStorageHttpError extends GlitchKitBaseHttpError {
  constructor(message: string, errorCode?: number) {
    super(message, 507, errorCode);
    this.name = 'GlitchKitInsufficientStorageHttpError';
    Object.setPrototypeOf(this, GlitchKitInsufficientStorageHttpError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitInsufficientStorageHttpError;
  }
}

export default GlitchKitInsufficientStorageHttpError;
