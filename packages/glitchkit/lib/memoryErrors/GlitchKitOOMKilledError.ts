import GlitchKitBaseError from '../baseGlitchKit/GlitchKitBaseError';

class GlitchKitOOMKilledError extends GlitchKitBaseError {
  constructor(message: string, errorCode?: number) {
    super(message, errorCode);
    Object.setPrototypeOf(this, GlitchKitOOMKilledError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitOOMKilledError;
  }
}

export default GlitchKitOOMKilledError;
