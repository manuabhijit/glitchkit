import GlitchKitBaseHttpError from '../baseGlitchKit/GlitchKitBaseHttpError';

class GlitchKitUnauthorizedHttpError extends GlitchKitBaseHttpError {
  constructor(message: string, errorCode?: number) {
    super(message, 401, errorCode);
    Object.setPrototypeOf(this, GlitchKitUnauthorizedHttpError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitUnauthorizedHttpError;
  }
}

export default GlitchKitUnauthorizedHttpError;
