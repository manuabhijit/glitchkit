import GlitchKitBaseHttpError from '../baseGlitchKit/GlitchKitBaseHttpError';

class GlitchKitTooEarlyHttpError extends GlitchKitBaseHttpError {
  constructor(message: string, errorCode?: number) {
    super(message, 425, errorCode);
    Object.setPrototypeOf(this, GlitchKitTooEarlyHttpError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitTooEarlyHttpError;
  }
}

export default GlitchKitTooEarlyHttpError;
