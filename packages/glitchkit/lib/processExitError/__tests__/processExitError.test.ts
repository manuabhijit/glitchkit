import GlitchKitBaseError from '../../baseGlitchKit/GlitchKitBaseError';
import { default as GlitchKitCrashLoopError } from './../GlitchKitCrashLoopError';
import { default as GlitchKitDependencyFailureExitError } from './../GlitchKitDependencyFailureExitError';
import { default as GlitchKitGeneralProcessError } from './../GlitchKitGeneralProcessError';
import { default as GlitchKitOOMKilledProcessError } from './../GlitchKitOOMKilledProcessError';
import { default as GlitchKitSegmentationFaultError } from './../GlitchKitSegmentationFaultError';
import { default as GlitchKitSigintProcessError } from './../GlitchKitSigintProcessError';
import { default as GlitchKitSigkillProcessError } from './../GlitchKitSigkillProcessError';
import { default as GlitchKitSigtermProcessError } from './../GlitchKitSigtermProcessError';
import { default as GlitchKitSystemShutdownExitError } from './../GlitchKitSystemShutdownExitError';
import { default as GlitchKitTimeoutExitError } from './../GlitchKitTimeoutExitError';
import { default as GlitchKitUnexpectedSuccessExitError } from './../GlitchKitUnexpectedSuccessExitError';
import { default as GlitchKitUnhandledExceptionExitError } from './../GlitchKitUnhandledExceptionExitError';
import { default as GlitchKitZombieProcessCleanupError } from './../GlitchKitZombieProcessCleanupError';

describe('MemoryError Generics', () => {
  const ErrorClasses: (typeof GlitchKitCrashLoopError)[] = [
    GlitchKitCrashLoopError,
    GlitchKitDependencyFailureExitError,
    GlitchKitGeneralProcessError,
    GlitchKitOOMKilledProcessError,
    GlitchKitSegmentationFaultError,
    GlitchKitSigintProcessError,
    GlitchKitSigkillProcessError,
    GlitchKitSigtermProcessError,
    GlitchKitSystemShutdownExitError,
    GlitchKitTimeoutExitError,
    GlitchKitUnexpectedSuccessExitError,
    GlitchKitUnhandledExceptionExitError,
    GlitchKitZombieProcessCleanupError,
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
