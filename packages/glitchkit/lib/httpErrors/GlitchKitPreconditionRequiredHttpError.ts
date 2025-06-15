import GlitchKitBaseHttpError from '../baseGlitchKit/GlitchKitBaseHttpError';

class GlitchKitPreconditionRequiredHttpError extends GlitchKitBaseHttpError {
  constructor(message: string, errorCode?: number) {
    super(message, 428, errorCode);
    this.name = 'GlitchKitPreconditionRequiredHttpError';
    Object.setPrototypeOf(this, GlitchKitPreconditionRequiredHttpError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitPreconditionRequiredHttpError;
  }
}

export default GlitchKitPreconditionRequiredHttpError;
