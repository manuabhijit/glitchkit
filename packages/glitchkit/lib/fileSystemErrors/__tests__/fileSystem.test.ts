import GlitchKitBaseError from '../../baseGlitchKit/GlitchKitBaseError';
import GlitchKitBaseFileSystemError from '../../baseGlitchKit/GlitchKitBaseFileSystemError';
import { default as GlitchKitDirectoryFoundError } from '../GlitchKitDirectoryFoundError';
import { default as GlitchKitDirectoryNotFoundError } from '../GlitchKitDirectoryNotFoundError';
import { default as GlitchKitDirectoryPermissionError } from '../GlitchKitDirectoryPermissionError';
import { default as GlitchKitFileExistsError } from '../GlitchKitFileExistsError';
import { default as GlitchKitFileNotFoundError } from '../GlitchKitFileNotFoundError';
import { default as GlitchKitFilePermissionError } from '../GlitchKitFilePermissionError';

describe('HttpError Generics', () => {
  const ErrorClasses = [
    GlitchKitDirectoryFoundError,
    GlitchKitDirectoryNotFoundError,
    GlitchKitDirectoryPermissionError,
    GlitchKitFileExistsError,
    GlitchKitFileNotFoundError,
    GlitchKitFilePermissionError,
  ];

  const DUMMY_PATH = '/dummy/path';
  const DUMMY_ERROR_CODE = 1001;
  const DUMMY_ERROR_MESSAGE = 'Test Error message';

  it('should be instance of correct BaseError', () => {
    for (const ErrorClass of ErrorClasses) {
      const errorInstance: GlitchKitBaseFileSystemError = new ErrorClass(DUMMY_ERROR_MESSAGE, DUMMY_ERROR_CODE);

      expect(errorInstance).toBeInstanceOf(ErrorClass);
      expect(ErrorClass.isInstance(errorInstance)).toBe(true);
      expect(GlitchKitBaseError.isInstance(errorInstance)).toBe(true);
      expect(GlitchKitBaseFileSystemError.isInstance(errorInstance)).toBe(true);

      try {
        errorInstance.raise();
      } catch (e) {
        expect(e).toBeInstanceOf(ErrorClass);
      }
    }
  });

  it('should be instance of correct initialization', () => {
    for (const ErrorClass of ErrorClasses) {
      const errorInstance: GlitchKitBaseFileSystemError = new ErrorClass(DUMMY_ERROR_MESSAGE, DUMMY_ERROR_CODE);

      expect(errorInstance.message).toBe(DUMMY_ERROR_MESSAGE);
      expect(errorInstance.errorCode).toBe(DUMMY_ERROR_CODE);

      const errorJson = errorInstance.toJSON();
      expect(errorJson.message).toBe(DUMMY_ERROR_MESSAGE);
    }
  });

  it('should assign collect attribute values 1', () => {
    for (const ErrorClass of ErrorClasses) {
      const errorInstance: GlitchKitBaseFileSystemError = new ErrorClass(DUMMY_ERROR_MESSAGE, DUMMY_ERROR_CODE);

      errorInstance.path = DUMMY_PATH;
      expect(errorInstance.path).toBe(DUMMY_PATH);

      errorInstance.errorCode = DUMMY_ERROR_CODE;
      expect(errorInstance.errorCode).toBe(DUMMY_ERROR_CODE);

      errorInstance.durationMs = 500;
      expect(errorInstance.durationMs).toBe(500);

      expect(errorInstance.timestamp).toBeInstanceOf(Date);

      const errorJson = errorInstance.toJSON();
      expect(errorJson.message).toBe(DUMMY_ERROR_MESSAGE);
    }
  });

  it('should assign collect attribute values 2', () => {
    for (const ErrorClass of ErrorClasses) {
      const errorInstance: GlitchKitBaseFileSystemError = new ErrorClass(DUMMY_ERROR_MESSAGE, DUMMY_ERROR_CODE);

      errorInstance.withPath(DUMMY_PATH);
      expect(errorInstance.path).toBe(DUMMY_PATH);

      errorInstance.withErrorCode(DUMMY_ERROR_CODE);
      expect(errorInstance.errorCode).toBe(DUMMY_ERROR_CODE);

      errorInstance.withDurationMs(500);
      expect(errorInstance.durationMs).toBe(500);

      expect(errorInstance.timestamp).toBeInstanceOf(Date);

      const errorJson = errorInstance.toJSON();
      expect(errorJson.message).toBe(DUMMY_ERROR_MESSAGE);
    }
  });
});

// We recommend installing an extension to run jest tests.
