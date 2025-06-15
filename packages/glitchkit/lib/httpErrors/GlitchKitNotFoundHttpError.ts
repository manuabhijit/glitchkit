import GlitchKitBaseHttpError from '../baseGlitchKit/GlitchKitBaseHttpError';

class GlitchKitNotFoundHttpError extends GlitchKitBaseHttpError {
  constructor(message: string, errorCode?: number) {
    super(message, 404, errorCode);
    this.name = 'GlitchKitNotFoundHttpError';

    Object.setPrototypeOf(this, GlitchKitNotFoundHttpError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  isInstance(error: unknown): error is GlitchKitNotFoundHttpError {
    return error instanceof GlitchKitNotFoundHttpError;
  }
}

export default GlitchKitNotFoundHttpError;
