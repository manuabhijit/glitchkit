import GlitchKitBaseHttpError from '../baseGlitchKit/GlitchKitBaseHttpError';

class GlitchKitConflictHttpError extends GlitchKitBaseHttpError {
  constructor(message: string, errorCode?: number) {
    super(message, 409, errorCode);
    this.name = 'GlitchKitConflictHttpError';
    Object.setPrototypeOf(this, GlitchKitConflictHttpError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
  static isInstance(error: unknown): error is GlitchKitConflictHttpError {
    return error instanceof GlitchKitConflictHttpError;
  }
}

export default GlitchKitConflictHttpError;
