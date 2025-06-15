import IGlitchKitBaseErrorJson from './GlitchKitBaseError.interface';

interface IGlitchKitBaseFileSystemErrorJson extends IGlitchKitBaseErrorJson {
  path: string | undefined;
}

export default IGlitchKitBaseFileSystemErrorJson;
