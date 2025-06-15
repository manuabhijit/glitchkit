import IGlitchKitTraceabilityJson from './interfaces/GlitchKitTraceability.interface';

class GlitchKitTraceability {
  private _traceId?: string;
  private _operation?: string;
  private _reported?: boolean;
  private _source?: string;

  public get traceId(): string | undefined {
    return this._traceId;
  }

  public set traceId(id: string | undefined) {
    this._traceId = id;
  }

  public withTraceId(id: string): this {
    this._traceId = id;
    return this;
  }

  public get operation(): string | undefined {
    return this._operation;
  }

  public set operation(op: string | undefined) {
    this._operation = op;
  }

  public withOperation(op: string): this {
    this._operation = op;
    return this;
  }

  public get reported(): boolean | undefined {
    return this._reported;
  }

  public set reported(val: boolean | undefined) {
    this._reported = val;
  }

  public withReported(val: boolean): this {
    this._reported = val;
    return this;
  }

  public get source(): string | undefined {
    return this._source;
  }

  public set source(src: string | undefined) {
    this._source = src;
  }

  public withSource(src: string): this {
    this._source = src;
    return this;
  }

  public toJson(): IGlitchKitTraceabilityJson {
    const traceability: IGlitchKitTraceabilityJson = {
      traceId: this.traceId,
      operation: this.operation,
      reported: this.reported,
      source: this.source,
    };
    return traceability;
  }
}

export default GlitchKitTraceability;
