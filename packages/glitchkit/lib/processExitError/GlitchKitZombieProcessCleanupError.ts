import GlitchKitBaseError from '../baseGlitchKit/GlitchKitBaseError';

class GlitchKitZombieProcessCleanupError extends GlitchKitBaseError {
  constructor(message: string, errorCode?: number) {
    super(message, errorCode);
    Object.setPrototypeOf(this, GlitchKitZombieProcessCleanupError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitZombieProcessCleanupError;
  }
}

export default GlitchKitZombieProcessCleanupError;
