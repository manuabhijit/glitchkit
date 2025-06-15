import GlitchKitBaseValidationError from '../baseGlitchKit/GlitchKitBaseValidationError';

class GlitchKitSchemaValidationError extends GlitchKitBaseValidationError<object> {
  private _schema?: object;

  constructor(message: string, errorCode?: number) {
    super(message, errorCode);
    Object.setPrototypeOf(this, GlitchKitSchemaValidationError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  get schema(): object | undefined {
    return this._schema;
  }

  set schema(schema: object | undefined) {
    this._schema = schema;
  }

  withSchema(schema: object): this {
    this._schema = schema;
    return this;
  }

  static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitSchemaValidationError;
  }
}

export default GlitchKitSchemaValidationError;
