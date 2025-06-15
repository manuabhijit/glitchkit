import GlitchKitBaseHttpError from '../baseGlitchKit/GlitchKitBaseHttpError';

class GlitchKitNotImplementedHttpError extends GlitchKitBaseHttpError {
  constructor(message: string, errorCode?: number) {
    super(message, 501, errorCode);
    this.name = 'GlitchKitNotImplementedHttpError';
    Object.setPrototypeOf(this, GlitchKitNotImplementedHttpError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
  static isInstance(error: unknown): error is GlitchKitNotImplementedHttpError {
    return error instanceof GlitchKitNotImplementedHttpError;
  }
}

export default GlitchKitNotImplementedHttpError;
