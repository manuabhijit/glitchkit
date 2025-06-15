import GlitchKitBaseHttpError from '../baseGlitchKit/GlitchKitBaseHttpError';

class GlitchKitRequestHeaderFieldsTooLargeHttpError extends GlitchKitBaseHttpError {
  constructor(message: string, errorCode?: number) {
    super(message, 431, errorCode);
    this.name = 'GlitchKitRequestHeaderFieldsTooLargeHttpError';
    Object.setPrototypeOf(this, GlitchKitRequestHeaderFieldsTooLargeHttpError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
  static isInstance(error: unknown): error is GlitchKitRequestHeaderFieldsTooLargeHttpError {
    return error instanceof GlitchKitRequestHeaderFieldsTooLargeHttpError;
  }
}

export default GlitchKitRequestHeaderFieldsTooLargeHttpError;
