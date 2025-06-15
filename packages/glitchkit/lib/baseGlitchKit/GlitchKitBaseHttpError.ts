import GlitchKitBaseError from './GlitchKitBaseError';

class GlitchKitBaseHttpError extends GlitchKitBaseError {
  private _statusCode: number;
  private _url: string | undefined;
  private _request: Object | undefined;
  private _response: Object | undefined;

  constructor(message: string, statusCode: number, errorCode?: number) {
    super(message, errorCode);
    this._statusCode = statusCode;

    Object.setPrototypeOf(this, GlitchKitBaseHttpError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  public static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitBaseHttpError;
  }

  get statusCode(): number {
    return this._statusCode;
  }

  set statusCode(value: number) {
    this._statusCode = value;
  }

  public withStatusCode(statusCode: number): this {
    this._statusCode = statusCode;
    return this;
  }

  get url(): string | undefined {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  public withUrl(url: string): this {
    this._url = url;
    return this;
  }

  get request(): Object | undefined {
    return this._request;
  }

  set request(value: Object | undefined) {
    this._request = value;
  }

  public withRequest(request: Object): this {
    this._request = request;
    return this;
  }

  get response(): Object | undefined {
    return this._response;
  }

  set response(value: Object | undefined) {
    this._response = value;
  }

  public withResponse(response: Object): this {
    this._response = response;
    return this;
  }

  public toJSON(): {} {
    return {
      ...super.toJSON(),
      statusCode: this._statusCode,
      url: this._url,
      request: this._request,
      response: this._response,
    };
  }
}

export default GlitchKitBaseHttpError;
