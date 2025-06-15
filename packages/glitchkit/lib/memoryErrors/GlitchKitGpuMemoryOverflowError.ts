import GlitchKitBaseError from '../baseGlitchKit/GlitchKitBaseError';

class GlitchKitGpuMemoryOverflowError extends GlitchKitBaseError {
  constructor(message: string = 'GPU memory overflow', errorCode?: number) {
    super(message, errorCode);
    Object.setPrototypeOf(this, GlitchKitGpuMemoryOverflowError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitGpuMemoryOverflowError;
  }
}

export default GlitchKitGpuMemoryOverflowError;
