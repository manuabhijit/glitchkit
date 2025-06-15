import GlitchKitBaseError from '../../baseGlitchKit/GlitchKitBaseError';
import GlitchKitBaseValidationError from '../../baseGlitchKit/GlitchKitBaseValidationError';
import { default as GlitchKitSchemaValidationError } from '../GlitchKitSchemaValidationError';

describe('ProcessExitError Generics', () => {
  const DUMMY_ERROR_MESSAGE = 'Test Error message';
  const DUMMY_ERROR_CODE = 1001;

  const DUMMY_SCHEMA = { type: 'object', properties: { key: { type: 'string' } } };
  const DUMMY_ATTRIBUTE = 'testAttribute';
  const DUMMY_ATTRIBUTE_VALUE = { key: 'value' };

  it('should be instance of correct BaseError', () => {
    const errorInstance: GlitchKitSchemaValidationError = new GlitchKitSchemaValidationError(DUMMY_ERROR_MESSAGE, DUMMY_ERROR_CODE);
    expect(GlitchKitBaseError.isInstance(errorInstance)).toBe(true);
    expect(GlitchKitBaseValidationError.isInstance(errorInstance)).toBe(true);
    expect(GlitchKitSchemaValidationError.isInstance(errorInstance)).toBe(true);
  });

  it('should assign collect attribute values 1', () => {
    const errorInstance: GlitchKitSchemaValidationError = new GlitchKitSchemaValidationError(DUMMY_ERROR_MESSAGE, DUMMY_ERROR_CODE);
    errorInstance.attribute = DUMMY_ATTRIBUTE;
    expect(errorInstance.attribute).toEqual(DUMMY_ATTRIBUTE);

    errorInstance.attributeValue = DUMMY_ATTRIBUTE_VALUE;
    expect(errorInstance.attributeValue).toEqual(DUMMY_ATTRIBUTE_VALUE);

    errorInstance.schema = DUMMY_SCHEMA;
    expect(errorInstance.schema).toEqual(DUMMY_SCHEMA);

    const errorJson = errorInstance.toJSON();
    expect(errorJson.message).toBe(DUMMY_ERROR_MESSAGE);
  });

  it('should assign collect attribute values 2', () => {
    const errorInstance: GlitchKitSchemaValidationError = new GlitchKitSchemaValidationError(DUMMY_ERROR_MESSAGE, DUMMY_ERROR_CODE);

    errorInstance.withAttribute(DUMMY_ATTRIBUTE);
    expect(errorInstance.attribute).toEqual(DUMMY_ATTRIBUTE);

    errorInstance.withAttributeValue(DUMMY_ATTRIBUTE_VALUE);
    expect(errorInstance.attributeValue).toEqual(DUMMY_ATTRIBUTE_VALUE);

    errorInstance.withSchema(DUMMY_SCHEMA);
    expect(errorInstance.schema).toEqual(DUMMY_SCHEMA);

    const errorJson = errorInstance.toJSON();
    expect(errorJson.message).toBe(DUMMY_ERROR_MESSAGE);
  });
});
