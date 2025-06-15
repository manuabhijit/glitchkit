import GlitchKitBaseHttpError from '../baseGlitchKit/GlitchKitBaseHttpError';

class GlitchKitPreconditionFailedHttpError extends GlitchKitBaseHttpError {
  constructor(message: string, errorCode?: number) {
    super(message, 412, errorCode);
    this.name = 'GlitchKitPreconditionFailedHttpError';
    Object.setPrototypeOf(this, GlitchKitPreconditionFailedHttpError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitPreconditionFailedHttpError;
  }
}

export default GlitchKitPreconditionFailedHttpError;
