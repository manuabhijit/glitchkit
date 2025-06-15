import GlitchKitBaseError from './GlitchKitBaseError';

class GlitchKitBaseHttpError extends GlitchKitBaseError {
  private _statusCode: number;

  private _url: string = '';

  constructor(message: string, statusCode: number, errorCode?: number) {
    super(message, errorCode);
    this._statusCode = statusCode;

    Object.setPrototypeOf(this, GlitchKitBaseHttpError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  public static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitBaseHttpError;
  }

  public toJSON(): {} {
    return {
      ...super.toJSON(),
      statusCode: this._statusCode,
      url: this._url,
    };
  }
}

export default GlitchKitBaseHttpError;
