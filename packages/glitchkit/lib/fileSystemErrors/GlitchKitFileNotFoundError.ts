import GlitchKitBaseFileSystemError from '../baseGlitchKit/GlitchKitBaseFileSystemError';

class GlitchKitFileNotFoundError extends GlitchKitBaseFileSystemError {
  constructor(message: string, errorCode?: number, filePath?: string) {
    super(message, errorCode);
    this.path = filePath;
    Object.setPrototypeOf(this, GlitchKitFileNotFoundError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitFileNotFoundError;
  }
}

export default GlitchKitFileNotFoundError;
