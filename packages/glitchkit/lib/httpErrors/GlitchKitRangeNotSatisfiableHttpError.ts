import GlitchKitBaseHttpError from '../baseGlitchKit/GlitchKitBaseHttpError';

class GlitchKitRangeNotSatisfiableHttpError extends GlitchKitBaseHttpError {
  constructor(message: string, errorCode?: number) {
    super(message, 416, errorCode);
    Object.setPrototypeOf(this, GlitchKitRangeNotSatisfiableHttpError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitRangeNotSatisfiableHttpError;
  }
}

export default GlitchKitRangeNotSatisfiableHttpError;
