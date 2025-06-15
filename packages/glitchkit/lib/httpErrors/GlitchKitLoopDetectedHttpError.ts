import GlitchKitBaseHttpError from '../baseGlitchKit/GlitchKitBaseHttpError';

class GlitchKitLoopDetectedHttpError extends GlitchKitBaseHttpError {
  constructor(message: string, errorCode?: number) {
    super(message, 508, errorCode);
    this.name = 'GlitchKitLoopDetectedHttpError';
    Object.setPrototypeOf(this, GlitchKitLoopDetectedHttpError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitLoopDetectedHttpError;
  }
}

export default GlitchKitLoopDetectedHttpError;
