import GlitchKitBaseHttpError from '../baseGlitchKit/GlitchKitBaseHttpError';

class GlitchKitPayloadTooLargeHttpError extends GlitchKitBaseHttpError {
  constructor(message: string, errorCode?: number) {
    super(message, 413, errorCode);
    this.name = 'GlitchKitPayloadTooLargeHttpError';
    Object.setPrototypeOf(this, GlitchKitPayloadTooLargeHttpError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
  static isInstance(error: unknown): error is GlitchKitPayloadTooLargeHttpError {
    return error instanceof GlitchKitPayloadTooLargeHttpError;
  }
}

export default GlitchKitPayloadTooLargeHttpError;
