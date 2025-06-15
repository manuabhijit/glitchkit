import GlitchKitBaseHttpError from '../baseGlitchKit/GlitchKitBaseHttpError';

class GlitchKitNotExtendedHttpError extends GlitchKitBaseHttpError {
  constructor(message: string, errorCode?: number) {
    super(message, 510, errorCode);
    Object.setPrototypeOf(this, GlitchKitNotExtendedHttpError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitNotExtendedHttpError;
  }
}

export default GlitchKitNotExtendedHttpError;
