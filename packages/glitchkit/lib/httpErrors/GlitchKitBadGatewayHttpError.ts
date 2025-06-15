import GlitchKitBaseHttpError from '../baseGlitchKit/GlitchKitBaseHttpError';

class GlitchKitBadGatewayHttpError extends GlitchKitBaseHttpError {
  constructor(message: string, errorCode?: number) {
    super(message, 502, errorCode);
    this.name = 'GlitchKitBadGatewayHttpError';
    Object.setPrototypeOf(this, GlitchKitBadGatewayHttpError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitBadGatewayHttpError;
  }
}

export default GlitchKitBadGatewayHttpError;
