import GlitchKitBaseError from '../baseGlitchKit/GlitchKitBaseError';

class GlitchKitSegmentationFaultError extends GlitchKitBaseError {
  constructor(message: string, errorCode?: number) {
    super(message, errorCode);
    Object.setPrototypeOf(this, GlitchKitSegmentationFaultError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitSegmentationFaultError;
  }
}

export default GlitchKitSegmentationFaultError;
