import GlitchKitBaseFileSystemError from '../baseGlitchKit/GlitchKitBaseFileSystemError';

class GlitchKitFileExistsError extends GlitchKitBaseFileSystemError {
  constructor(message: string, errorCode?: number, filePath?: string) {
    super(message, errorCode);
    this.path = filePath;
    Object.setPrototypeOf(this, GlitchKitFileExistsError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitFileExistsError;
  }
}

export default GlitchKitFileExistsError;
