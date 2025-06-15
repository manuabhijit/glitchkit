import GlitchKitBaseHttpError from '../baseGlitchKit/GlitchKitBaseHttpError';

class GlitchKitVariantAlsoNegotiatesHttpError extends GlitchKitBaseHttpError {
  constructor(message: string, errorCode?: number) {
    super(message, 506, errorCode);
    Object.setPrototypeOf(this, GlitchKitVariantAlsoNegotiatesHttpError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitVariantAlsoNegotiatesHttpError;
  }
}

export default GlitchKitVariantAlsoNegotiatesHttpError;
