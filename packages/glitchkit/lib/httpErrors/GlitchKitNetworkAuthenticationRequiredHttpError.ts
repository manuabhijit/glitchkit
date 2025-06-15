import GlitchKitBaseHttpError from '../baseGlitchKit/GlitchKitBaseHttpError';

class GlitchKitNetworkAuthenticationRequiredHttpError extends GlitchKitBaseHttpError {
  constructor(message: string, errorCode?: number) {
    super(message, 511, errorCode);
    this.name = 'GlitchKitNetworkAuthenticationRequiredHttpError';
    Object.setPrototypeOf(this, GlitchKitNetworkAuthenticationRequiredHttpError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitNetworkAuthenticationRequiredHttpError;
  }
}

export default GlitchKitNetworkAuthenticationRequiredHttpError;
