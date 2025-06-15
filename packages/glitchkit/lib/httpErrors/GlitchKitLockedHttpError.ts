import GlitchKitBaseHttpError from '../baseGlitchKit/GlitchKitBaseHttpError';

class GlitchKitLockedHttpError extends GlitchKitBaseHttpError {
  constructor(message: string, errorCode?: number) {
    super(message, 423, errorCode);
    this.name = 'GlitchKitLockedHttpError';
    Object.setPrototypeOf(this, GlitchKitLockedHttpError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitLockedHttpError;
  }
}

export default GlitchKitLockedHttpError;
