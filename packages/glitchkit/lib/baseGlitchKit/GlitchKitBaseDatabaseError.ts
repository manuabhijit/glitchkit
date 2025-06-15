import GlitchKitDatabase from '../utility/GlitchKitDatabase';
import GlitchKitBaseError from './GlitchKitBaseError';

export class GlitchKitBaseDatabaseError extends GlitchKitBaseError {
  private _database: GlitchKitDatabase = new GlitchKitDatabase();

  constructor(message: string, errorCode?: number) {
    super(message, errorCode);
    Object.setPrototypeOf(this, GlitchKitBaseDatabaseError.prototype);
  }

  get database(): GlitchKitDatabase {
    return this._database;
  }

  set database(database: GlitchKitDatabase) {
    this._database = database;
  }

  withDatabase(database: GlitchKitDatabase): this {
    this._database = database;
    return this;
  }
}
