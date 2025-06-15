import GlitchKitBaseHttpError from '../baseGlitchKit/GlitchKitBaseHttpError';

class GlitchKitProxyAuthenticationRequiredHttpError extends GlitchKitBaseHttpError {
  constructor(message: string, errorCode?: number) {
    super(message, 407, errorCode);
    this.name = 'GlitchKitProxyAuthenticationRequiredHttpError';
    Object.setPrototypeOf(this, GlitchKitProxyAuthenticationRequiredHttpError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitProxyAuthenticationRequiredHttpError;
  }
}

export default GlitchKitProxyAuthenticationRequiredHttpError;
