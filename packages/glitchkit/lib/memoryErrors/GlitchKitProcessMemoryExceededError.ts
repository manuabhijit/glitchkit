import GlitchKitBaseError from '../baseGlitchKit/GlitchKitBaseError';

class GlitchKitProcessMemoryExceededError extends GlitchKitBaseError {
  constructor(message: string, errorCode?: number) {
    super(message, errorCode);
    Object.setPrototypeOf(this, GlitchKitProcessMemoryExceededError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitProcessMemoryExceededError;
  }
}

export default GlitchKitProcessMemoryExceededError;
