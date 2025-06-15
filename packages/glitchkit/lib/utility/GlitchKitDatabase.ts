class GlitchKitDatabase {
  private _databaseType: string | undefined;
  private _databaseName: string | undefined;
  private _databaseUrl: string | undefined;

  get databaseType(): string | undefined {
    return this._databaseType;
  }

  set databaseType(value: string) {
    this._databaseType = value;
  }

  get databaseName(): string | undefined {
    return this._databaseName;
  }

  set databaseName(value: string) {
    this._databaseName = value;
  }

  get databaseUrl(): string | undefined {
    return this._databaseUrl;
  }

  set databaseUrl(value: string) {
    this._databaseUrl = value;
  }

  withDatabaseType(databaseType: string): this {
    this._databaseType = databaseType;
    return this;
  }

  withDatabaseName(databaseName: string): this {
    this._databaseName = databaseName;
    return this;
  }

  withDatabaseUrl(databaseUrl: string): this {
    this._databaseUrl = databaseUrl;
    return this;
  }
}

export default GlitchKitDatabase;
