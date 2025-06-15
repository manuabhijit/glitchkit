import GlitchKitBaseError from '../../baseGlitchKit/GlitchKitBaseError';
import { default as GlitchKitArrayAttributeValidationError } from '../GlitchKitArrayAttributeValidationError';
import { default as GlitchKitBooleanAttributeValidationError } from '../GlitchKitBooleanAttributeValidationError';
import { default as GlitchKitDateAttributeValidationError } from '../GlitchKitDateAttributeValidationError';
import { default as GlitchKitNumericAttributeValidationError } from '../GlitchKitNumericAttributeValidationError';
import { default as GlitchKitObjectAttributeValidationError } from '../GlitchKitObjectAttributeValidationError';
import { default as GlitchKitSchemaValidationError } from '../GlitchKitSchemaValidationError';
import { default as GlitchKitStringAttributeValidationError } from '../GlitchKitStringAttributeValidationError';

describe('ProcessExitError Generics', () => {
  const ErrorClasses = [
    GlitchKitArrayAttributeValidationError,
    GlitchKitBooleanAttributeValidationError,
    GlitchKitDateAttributeValidationError,
    GlitchKitNumericAttributeValidationError,
    GlitchKitObjectAttributeValidationError,
    GlitchKitSchemaValidationError,
    GlitchKitStringAttributeValidationError,
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
