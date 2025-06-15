import GlitchKitDatabase from '../utility/GlitchKitDatabase';
import GlitchKitBaseError from './GlitchKitBaseError';

export class GlitchKitBaseDatabaseError extends GlitchKitBaseError {
  public database: GlitchKitDatabase = new GlitchKitDatabase();

  constructor(message: string, errorCode?: number) {
    super(message, errorCode);
    Object.setPrototypeOf(this, GlitchKitBaseDatabaseError.prototype);
  }
}
