import GlitchKitMetadata from '../utility/GlitchKitMetadata';
import GlitchKitTraceability from '../utility/GlitchKitTraceability';
import IGlitchKitBaseErrorJson from './interfaces/GlitchKitBaseError.interface';

/**
 * Base class for all GlitchKit errors.
 * Provides common properties and methods for error handling.
 */
abstract class GlitchKitBaseError extends Error {
  // Properties for traceability and metadata
  private _traceability: GlitchKitTraceability = new GlitchKitTraceability();
  private _metadata: GlitchKitMetadata = new GlitchKitMetadata();

  // Properties for error code, timestamp, and duration
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

  public get traceability(): GlitchKitTraceability {
    return this._traceability;
  }

  public set traceability(trace: GlitchKitTraceability) {
    this._traceability = trace;
  }

  public withTraceability(trace: GlitchKitTraceability): this {
    this._traceability = trace;
    return this;
  }

  public get metadata(): GlitchKitMetadata {
    return this._metadata;
  }

  public set metadata(meta: GlitchKitMetadata) {
    this._metadata = meta;
  }

  public withMetadata(meta: GlitchKitMetadata): this {
    this._metadata = meta;
    return this;
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
