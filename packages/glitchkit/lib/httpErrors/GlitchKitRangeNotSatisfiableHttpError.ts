import GlitchKitBaseHttpError from '../baseGlitchKit/GlitchKitBaseHttpError';

class GlitchKitRangeNotSatisfiableHttpError extends GlitchKitBaseHttpError {
  constructor(message: string, errorCode?: number) {
    super(message, 416, errorCode);
    this.name = 'GlitchKitRangeNotSatisfiableHttpError';
    Object.setPrototypeOf(this, GlitchKitRangeNotSatisfiableHttpError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
  static isInstance(error: unknown): error is GlitchKitRangeNotSatisfiableHttpError {
    return error instanceof GlitchKitRangeNotSatisfiableHttpError;
  }
}

export default GlitchKitRangeNotSatisfiableHttpError;
