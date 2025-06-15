import GlitchKitBaseFileSystemError from '../baseGlitchKit/GlitchKitBaseFileSystemError';

class GlitchKitDirectoryNotFoundError extends GlitchKitBaseFileSystemError {
  constructor(message: string, errorCode?: number, directoryPath?: string) {
    super(message, errorCode);
    this.path = directoryPath;
    Object.setPrototypeOf(this, GlitchKitDirectoryNotFoundError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitDirectoryNotFoundError;
  }
}

export default GlitchKitDirectoryNotFoundError;
