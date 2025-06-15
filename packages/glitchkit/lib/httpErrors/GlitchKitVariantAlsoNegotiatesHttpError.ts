import GlitchKitBaseHttpError from '../baseGlitchKit/GlitchKitBaseHttpError';

class GlitchKitVariantAlsoNegotiatesHttpError extends GlitchKitBaseHttpError {
  constructor(message: string, errorCode?: number) {
    super(message, 506, errorCode);
    this.name = 'GlitchKitVariantAlsoNegotiatesHttpError';
    Object.setPrototypeOf(this, GlitchKitVariantAlsoNegotiatesHttpError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
  static isInstance(error: unknown): error is GlitchKitVariantAlsoNegotiatesHttpError {
    return error instanceof GlitchKitVariantAlsoNegotiatesHttpError;
  }
}

export default GlitchKitVariantAlsoNegotiatesHttpError;
