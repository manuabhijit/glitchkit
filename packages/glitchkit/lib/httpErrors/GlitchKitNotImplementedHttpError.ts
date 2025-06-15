import GlitchKitBaseHttpError from '../baseGlitchKit/GlitchKitBaseHttpError';

class GlitchKitNotImplementedHttpError extends GlitchKitBaseHttpError {
  constructor(message: string, errorCode?: number) {
    super(message, 501, errorCode);
    Object.setPrototypeOf(this, GlitchKitNotImplementedHttpError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitNotImplementedHttpError;
  }
}

export default GlitchKitNotImplementedHttpError;
