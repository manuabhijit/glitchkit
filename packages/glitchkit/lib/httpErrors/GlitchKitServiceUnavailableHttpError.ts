import GlitchKitBaseHttpError from '../baseGlitchKit/GlitchKitBaseHttpError';

class GlitchKitServiceUnavailableHttpError extends GlitchKitBaseHttpError {
  constructor(message: string, errorCode?: number) {
    super(message, 503, errorCode);
    this.name = 'GlitchKitServiceUnavailableHttpError';
    Object.setPrototypeOf(this, GlitchKitServiceUnavailableHttpError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitServiceUnavailableHttpError;
  }
}

export default GlitchKitServiceUnavailableHttpError;
