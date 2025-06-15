import GlitchKitBaseHttpError from '../baseGlitchKit/GlitchKitBaseHttpError';

class GlitchKitNotAcceptableHttpError extends GlitchKitBaseHttpError {
  constructor(message: string, errorCode?: number) {
    super(message, 406, errorCode);
    this.name = 'GlitchKitNotAcceptableHttpError';
    Object.setPrototypeOf(this, GlitchKitNotAcceptableHttpError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitNotAcceptableHttpError;
  }
}

export default GlitchKitNotAcceptableHttpError;
