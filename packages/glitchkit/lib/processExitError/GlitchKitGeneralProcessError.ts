import GlitchKitBaseError from '../baseGlitchKit/GlitchKitBaseError';

class GlitchKitGeneralProcessError extends GlitchKitBaseError {
  constructor(message: string, errorCode?: number) {
    super(message, errorCode);
    Object.setPrototypeOf(this, GlitchKitGeneralProcessError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitGeneralProcessError;
  }
}

export default GlitchKitGeneralProcessError;
