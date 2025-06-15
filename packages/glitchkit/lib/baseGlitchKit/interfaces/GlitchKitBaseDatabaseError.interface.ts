import { IGlitchKitDatabaseJson } from './../../utility';
import IGlitchKitBaseErrorJson from './GlitchKitBaseError.interface';

interface GlitchKitBaseDatabaseErrorJson extends IGlitchKitBaseErrorJson {
  database: IGlitchKitDatabaseJson;
}

export default GlitchKitBaseDatabaseErrorJson;
