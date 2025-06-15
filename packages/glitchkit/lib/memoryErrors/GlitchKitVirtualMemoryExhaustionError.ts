import GlitchKitBaseError from '../baseGlitchKit/GlitchKitBaseError';

class GlitchKitVirtualMemoryExhaustionError extends GlitchKitBaseError {
  constructor(message: string, errorCode?: number) {
    super(message, errorCode);
    Object.setPrototypeOf(this, GlitchKitVirtualMemoryExhaustionError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitVirtualMemoryExhaustionError;
  }
}

export default GlitchKitVirtualMemoryExhaustionError;
