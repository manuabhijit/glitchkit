import GlitchKitBaseHttpError from '../baseGlitchKit/GlitchKitBaseHttpError';

class GlitchKitUnprocessableEntityHttpError extends GlitchKitBaseHttpError {
  constructor(message: string, errorCode?: number) {
    super(message, 422, errorCode);
    Object.setPrototypeOf(this, GlitchKitUnprocessableEntityHttpError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitUnprocessableEntityHttpError;
  }
}

export default GlitchKitUnprocessableEntityHttpError;
