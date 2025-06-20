import GlitchKitBaseDatabaseError from '../../baseGlitchKit/GlitchKitBaseDatabaseError';

class GlitchKitConnectionRefusedError extends GlitchKitBaseDatabaseError {
  constructor(message: string, errorCode?: number) {
    super(message, errorCode);
    Object.setPrototypeOf(this, GlitchKitConnectionRefusedError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitConnectionRefusedError;
  }
}

export default GlitchKitConnectionRefusedError;
