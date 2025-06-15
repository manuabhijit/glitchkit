import GlitchKitBaseError from '../baseGlitchKit/GlitchKitBaseError';

class GlitchKitSigtermProcessError extends GlitchKitBaseError {
  constructor(message: string, errorCode?: number) {
    super(message, errorCode);
    Object.setPrototypeOf(this, GlitchKitSigtermProcessError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitSigtermProcessError;
  }
}

export default GlitchKitSigtermProcessError;
