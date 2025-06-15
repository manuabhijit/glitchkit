import GlitchKitBaseError from '../../baseGlitchKit/GlitchKitBaseError';
import { default as GlitchKitBadAllocError } from '../GlitchKitBadAllocError';
import { default as GlitchKitBufferOverflowError } from '../GlitchKitBufferOverflowError';
import { default as GlitchKitGpuMemoryOverflowError } from '../GlitchKitGpuMemoryOverflowError';
import { default as GlitchKitHeapOverflowError } from '../GlitchKitHeapOverflowError';
import { default as GlitchKitMemoryQuotaExceededError } from '../GlitchKitMemoryQuotaExceededError';
import { default as GlitchKitOOMKilledError } from '../GlitchKitOOMKilledError';
import { default as GlitchKitOutOfMemoryError } from '../GlitchKitOutOfMemoryError';
import { default as GlitchKitProcessMemoryExceededError } from '../GlitchKitProcessMemoryExceededError';
import { default as GlitchKitStackOverflowError } from '../GlitchKitStackOverflowError';
import { default as GlitchKitVirtualMemoryExhaustionError } from '../GlitchKitVirtualMemoryExhaustionError';

describe('MemoryError Generics', () => {
  const ErrorClasses = [
    GlitchKitBadAllocError,
    GlitchKitBufferOverflowError,
    GlitchKitGpuMemoryOverflowError,
    GlitchKitHeapOverflowError,
    GlitchKitMemoryQuotaExceededError,
    GlitchKitOOMKilledError,
    GlitchKitOutOfMemoryError,
    GlitchKitProcessMemoryExceededError,
    GlitchKitStackOverflowError,
    GlitchKitVirtualMemoryExhaustionError,
  ];

  it('should be instance of correct BaseError', () => {
    for (const ErrorClass of ErrorClasses) {
      const errorInstance: GlitchKitBaseError = new ErrorClass('Test Error message', 1001);
      expect(errorInstance).toBeInstanceOf(ErrorClass);
      expect(ErrorClass.isInstance(errorInstance)).toBe(true);
      expect(GlitchKitBaseError.isInstance(errorInstance)).toBe(true);
    }
  });
});

// We recommend installing an extension to run jest tests.
