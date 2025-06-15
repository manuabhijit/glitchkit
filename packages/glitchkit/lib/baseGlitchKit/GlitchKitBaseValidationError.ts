import GlitchKitBaseError from '../baseGlitchKit/GlitchKitBaseError';

class GlitchKitBaseValidationError<T> extends GlitchKitBaseError {
  private _attribute: string | undefined;
  private _attributeValue: T | undefined;

  constructor(message: string, errorCode?: number) {
    super(message, errorCode);
    Object.setPrototypeOf(this, GlitchKitBaseValidationError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitBaseValidationError;
  }

  public get attribute(): string | undefined {
    return this._attribute;
  }

  public set attribute(value: string | undefined) {
    this._attribute = value;
  }

  public get attributeValue(): T | undefined {
    return this._attributeValue;
  }

  public set attributeValue(value: T | undefined) {
    this._attributeValue = value;
  }

  public withAttribute(attribute: string): this {
    this._attribute = attribute;
    return this;
  }

  public withAttributeValue(value: T): this {
    this._attributeValue = value;
    return this;
  }

  public toJSON(): Record<string, unknown> {
    return {
      ...super.toJSON(),
      attribute: this._attribute,
      attributeValue: this._attributeValue,
    };
  }
}

export default GlitchKitBaseValidationError;
