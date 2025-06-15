import IGlitchKitBaseErrorJson from './GlitchKitBaseError.interface';

interface IGlitchKitBaseHttpErrorJson extends IGlitchKitBaseErrorJson {
  statusCode: number;
  url: string | undefined;
  request: object | undefined;
  response: object | undefined;
}

export default IGlitchKitBaseHttpErrorJson;
