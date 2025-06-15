import GlitchKitBaseHttpError from '../baseGlitchKit/GlitchKitBaseHttpError';

class GlitchKitPaymentRequiredHttpError extends GlitchKitBaseHttpError {
  constructor(message: string, errorCode?: number) {
    super(message, 402, errorCode);
    this.name = 'GlitchKitPaymentRequiredHttpError';
    Object.setPrototypeOf(this, GlitchKitPaymentRequiredHttpError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
  static isInstance(error: unknown): error is GlitchKitPaymentRequiredHttpError {
    return error instanceof GlitchKitPaymentRequiredHttpError;
  }
}

export default GlitchKitPaymentRequiredHttpError;
