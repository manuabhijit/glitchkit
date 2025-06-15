import GlitchKitBaseHttpError from '../baseGlitchKit/GlitchKitBaseHttpError';

class GlitchKitGatewayTimeoutHttpError extends GlitchKitBaseHttpError {
  constructor(message: string, errorCode?: number) {
    super(message, 504, errorCode);
    this.name = 'GlitchKitGatewayTimeoutHttpError';
    Object.setPrototypeOf(this, GlitchKitGatewayTimeoutHttpError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitGatewayTimeoutHttpError;
  }
}

export default GlitchKitGatewayTimeoutHttpError;
