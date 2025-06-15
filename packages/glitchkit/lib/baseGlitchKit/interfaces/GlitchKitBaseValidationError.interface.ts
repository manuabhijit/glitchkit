import IGlitchKitBaseErrorJson from './GlitchKitBaseError.interface';

interface IGlitchKitBaseValidationErrorJson<T> extends IGlitchKitBaseErrorJson {
  attribute: string | undefined;
  attributeValue: T | undefined;
}

export default IGlitchKitBaseValidationErrorJson;
