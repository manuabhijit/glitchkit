import GlitchKitBaseError from '../baseGlitchKit/GlitchKitBaseError';

class GlitchKitMemoryQuotaExceededError extends GlitchKitBaseError {
  constructor(message: string = 'Memory quota exceeded', errorCode?: number) {
    super(message, errorCode);
    Object.setPrototypeOf(this, GlitchKitMemoryQuotaExceededError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitMemoryQuotaExceededError;
  }
}

export default GlitchKitMemoryQuotaExceededError;
