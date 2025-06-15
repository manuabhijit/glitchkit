import GlitchKitBaseError from '../baseGlitchKit/GlitchKitBaseError';

class GlitchKitOOMKilledProcessError extends GlitchKitBaseError {
  constructor(message: string, errorCode?: number) {
    super(message, errorCode);
    Object.setPrototypeOf(this, GlitchKitOOMKilledProcessError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitOOMKilledProcessError;
  }
}

export default GlitchKitOOMKilledProcessError;
