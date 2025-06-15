import GlitchKitBaseFileSystemError from '../baseGlitchKit/GlitchKitBaseFileSystemError';

class GlitchKitDirectoryPermissionError extends GlitchKitBaseFileSystemError {
  constructor(message: string, errorCode?: number, directoryPath?: string) {
    super(message, errorCode);
    this.path = directoryPath;
    Object.setPrototypeOf(this, GlitchKitDirectoryPermissionError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitDirectoryPermissionError;
  }
}

export default GlitchKitDirectoryPermissionError;
