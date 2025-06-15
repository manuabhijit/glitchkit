import GlitchKitBaseFileSystemError from '../baseGlitchKit/GlitchKitBaseFileSystemError';

class GlitchKitFilePermissionError extends GlitchKitBaseFileSystemError {
  constructor(message: string, errorCode?: number, public filePath?: string) {
    super(message, errorCode);
    this.path = filePath;
    Object.setPrototypeOf(this, GlitchKitFilePermissionError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitFilePermissionError;
  }
}

export default GlitchKitFilePermissionError;
