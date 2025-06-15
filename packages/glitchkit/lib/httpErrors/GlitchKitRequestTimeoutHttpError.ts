import GlitchKitBaseHttpError from '../baseGlitchKit/GlitchKitBaseHttpError';

class GlitchKitRequestTimeoutHttpError extends GlitchKitBaseHttpError {
  constructor(message: string, errorCode?: number) {
    super(message, 408, errorCode);
    this.name = 'GlitchKitRequestTimeoutHttpError';
    Object.setPrototypeOf(this, GlitchKitRequestTimeoutHttpError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
  static isInstance(error: unknown): error is GlitchKitRequestTimeoutHttpError {
    return error instanceof GlitchKitRequestTimeoutHttpError;
  }
}

export default GlitchKitRequestTimeoutHttpError;
