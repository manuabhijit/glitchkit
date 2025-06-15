import GlitchKitBaseError from '../baseGlitchKit/GlitchKitBaseError';

class GlitchKitCrashLoopError extends GlitchKitBaseError {
  constructor(message: string, errorCode?: number) {
    super(message, errorCode);
    Object.setPrototypeOf(this, GlitchKitCrashLoopError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitCrashLoopError;
  }
}

export default GlitchKitCrashLoopError;
