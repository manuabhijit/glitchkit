import GlitchKitBaseHttpError from '../baseGlitchKit/GlitchKitBaseHttpError';

class GlitchKitRequestTimeoutHttpError extends GlitchKitBaseHttpError {
  constructor(message: string, errorCode?: number) {
    super(message, 408, errorCode);
    Object.setPrototypeOf(this, GlitchKitRequestTimeoutHttpError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitRequestTimeoutHttpError;
  }
}

export default GlitchKitRequestTimeoutHttpError;
