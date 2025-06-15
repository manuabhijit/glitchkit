import GlitchKitBaseError from '../baseGlitchKit/GlitchKitBaseError';

class GlitchKitBusinessLogicError extends GlitchKitBaseError {
  constructor(message: string, errorCode?: number) {
    super(message, errorCode);
    Object.setPrototypeOf(this, GlitchKitBusinessLogicError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitBusinessLogicError;
  }
}

export default GlitchKitBusinessLogicError;
