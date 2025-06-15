import GlitchKitBaseHttpError from '../baseGlitchKit/GlitchKitBaseHttpError';

class GlitchKitNotFoundHttpError extends GlitchKitBaseHttpError {
  constructor(message: string, errorCode?: number) {
    super(message, 404, errorCode);
    this.name = 'GlitchKitNotFoundHttpError';

    Object.setPrototypeOf(this, GlitchKitNotFoundHttpError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitNotFoundHttpError;
  }
}

export default GlitchKitNotFoundHttpError;
