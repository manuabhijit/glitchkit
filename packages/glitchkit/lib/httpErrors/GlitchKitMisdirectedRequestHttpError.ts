import GlitchKitBaseHttpError from '../baseGlitchKit/GlitchKitBaseHttpError';

class GlitchKitMisdirectedRequestHttpError extends GlitchKitBaseHttpError {
  constructor(message: string, errorCode?: number) {
    super(message, 421, errorCode);
    this.name = 'GlitchKitMisdirectedRequestHttpError';
    Object.setPrototypeOf(this, GlitchKitMisdirectedRequestHttpError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitMisdirectedRequestHttpError;
  }
}

export default GlitchKitMisdirectedRequestHttpError;
