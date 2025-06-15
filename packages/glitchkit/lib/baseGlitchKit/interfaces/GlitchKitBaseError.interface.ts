import { IGlitchKitMetadataJson, IGlitchKitTraceabilityJson } from '../../utility';

interface IGlitchKitBaseErrorJson {
  name: string;
  message: string;
  errorCode: number | undefined;
  stack: string | undefined;
  timestamp: string;
  durationMs: number | undefined;
  metadata: IGlitchKitMetadataJson;
  traceability: IGlitchKitTraceabilityJson;
}

export default IGlitchKitBaseErrorJson;
