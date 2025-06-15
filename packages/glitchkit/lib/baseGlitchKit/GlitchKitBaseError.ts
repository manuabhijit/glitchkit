import GlitchKitMetadata from '../utility/GlitchKitMetadata';
import GlitchKitTraceability from '../utility/GlitchKitTraceability';
import IGlitchKitBaseErrorJson from './interfaces/GlitchKitBaseError.interface';

abstract class GlitchKitBaseError extends Error {
  public traceability = new GlitchKitTraceability();
  public metadata = new GlitchKitMetadata();

  private _errorCode?: number;
  private _timestamp: Date;
  private _durationMs?: number;

  constructor(message: string, errorCode?: number) {
    super(message);
    this._errorCode = errorCode;
    this._timestamp = new Date();

    Object.setPrototypeOf(this, GlitchKitBaseError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }

  public get errorCode(): number | undefined {
    return this._errorCode;
  }

  public set errorCode(code: number | undefined) {
    this._errorCode = code;
  }

  public withErrorCode(code: number): this {
    this._errorCode = code;
    return this;
  }

  public get timestamp(): Date {
    return this._timestamp;
  }

  public get durationMs(): number | undefined {
    return this._durationMs;
  }

  public set durationMs(val: number | undefined) {
    this._durationMs = val;
  }

  public withDurationMs(val: number): this {
    this._durationMs = val;
    return this;
  }

  public static isInstance(error: unknown): boolean {
    return error instanceof GlitchKitBaseError;
  }

  public toJSON(): IGlitchKitBaseErrorJson {
    const jsonError: IGlitchKitBaseErrorJson = {
      name: this.name,
      message: this.message,
      errorCode: this._errorCode,
      stack: this.stack,
      timestamp: this._timestamp.toISOString(),
      durationMs: this._durationMs,
      metadata: this.metadata.toJson(),
      traceability: this.traceability.toJson(),
    };

    return jsonError;
  }

  public raise(): never {
    throw this;
  }
}

export default GlitchKitBaseError;
