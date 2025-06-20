import GlitchKitBaseError from './GlitchKitBaseError';
import IGlitchKitBaseFileSystemErrorJson from './interfaces/GlitchKitBaseFileSystemError.interface';

class GlitchKitBaseFileSystemError extends GlitchKitBaseError {
  private _path?: string;

  constructor(message: string, errorCode?: number) {
    super(message, errorCode);
    Object.setPrototypeOf(this, GlitchKitBaseFileSystemError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  get path(): string | undefined {
    return this._path;
  }

  set path(value: string | undefined) {
    this._path = value;
  }

  withPath(path: string): this {
    this._path = path;
    return this;
  }

  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitBaseFileSystemError;
  }

  public override toJSON(): IGlitchKitBaseFileSystemErrorJson {
    const jsonError: IGlitchKitBaseFileSystemErrorJson = {
      ...super.toJSON(),
      path: this._path,
    };

    return jsonError;
  }
}

export default GlitchKitBaseFileSystemError;
