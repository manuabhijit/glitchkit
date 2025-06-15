import GlitchKitBaseHttpError from '../baseGlitchKit/GlitchKitBaseHttpError';

class GlitchKitImATeapotHttpError extends GlitchKitBaseHttpError {
  constructor(message: string, errorCode?: number) {
    super(message, 418, errorCode);
    this.name = 'GlitchKitImATeapotHttpError';
    Object.setPrototypeOf(this, GlitchKitImATeapotHttpError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
  static isInstance(error: unknown): error is GlitchKitImATeapotHttpError {
    return error instanceof GlitchKitImATeapotHttpError;
  }
}

export default GlitchKitImATeapotHttpError;
