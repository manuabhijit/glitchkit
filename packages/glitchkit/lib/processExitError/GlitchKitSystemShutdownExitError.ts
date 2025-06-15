import GlitchKitBaseError from '../baseGlitchKit/GlitchKitBaseError';

class GlitchKitSystemShutdownExitError extends GlitchKitBaseError {
  constructor(message: string, errorCode?: number) {
    super(message, errorCode);
    Object.setPrototypeOf(this, GlitchKitSystemShutdownExitError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitSystemShutdownExitError;
  }
}

export default GlitchKitSystemShutdownExitError;
