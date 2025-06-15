import GlitchKitBaseHttpError from '../baseGlitchKit/GlitchKitBaseHttpError';

class GlitchKitUnavailableForLegalReasonsHttpError extends GlitchKitBaseHttpError {
  constructor(message: string, errorCode?: number) {
    super(message, 451, errorCode);
    this.name = 'GlitchKitUnavailableForLegalReasonsHttpError';
    Object.setPrototypeOf(this, GlitchKitUnavailableForLegalReasonsHttpError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitUnavailableForLegalReasonsHttpError;
  }
}

export default GlitchKitUnavailableForLegalReasonsHttpError;
