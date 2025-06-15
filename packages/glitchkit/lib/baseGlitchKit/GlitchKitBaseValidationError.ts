import GlitchKitBaseError from '../baseGlitchKit/GlitchKitBaseError';

class GlitchKitBaseValidationError<T> extends GlitchKitBaseError {
  private _attribute: string | undefined;
  private _attributeValue: T | undefined;

  constructor(message: string, errorCode?: number, attribute?: string, attributeValue?: T) {
    super(message, errorCode);
    this.name = 'GlitchKitBaseValidationError';
    this._attribute = attribute;
    this._attributeValue = attributeValue;
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
}

export default GlitchKitBaseValidationError;
