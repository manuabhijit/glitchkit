import GlitchKitBaseFileSystemError from '../baseGlitchKit/GlitchKitBaseFileSystemError';

class GlitchKitDirectoryFoundError extends GlitchKitBaseFileSystemError {
  constructor(message: string, errorCode?: number, directoryPath?: string) {
    super(message, errorCode);
    this.path = directoryPath;
    Object.setPrototypeOf(this, GlitchKitDirectoryFoundError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitDirectoryFoundError;
  }
}

export default GlitchKitDirectoryFoundError;
