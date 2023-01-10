import { NativeModules, Dimensions } from 'react-native';

export type RecordingStartResponse = 'started' | 'permission_error';

export type RecordScreenConfigType = {
  width?: number;
  height?: number;
  fps?: number;
  bitrate?: number;
  mic?: boolean;
};

export type RecordingSuccessResponse = {
  status: 'success';
  result: {
    outputURL: string;
  };
};

export type RecordingErrorResponse = {
  status: 'error';
  result: unknown;
};

export type RecordingResponse =
  | RecordingSuccessResponse
  | RecordingErrorResponse;

type RecordScreenNativeModule = {
  setup(config: RecordScreenConfigType): void;
  startRecording(): Promise<RecordingStartResponse>;
  stopRecording(): Promise<RecordingResponse>;
  clean(): Promise<string>;
};

const { RecordScreen } = NativeModules;

const RS = RecordScreen as RecordScreenNativeModule;

class ReactNativeRecordScreenClass {
  private setup(config: RecordScreenConfigType = {}): void {
    const { width, height } = Dimensions.get('window');
    RS.setup({
      mic: true,
      width,
      height,
      fps: 60,
      bitrate: 1920 * 1080 * 144,
      ...config,
    });
  }

  startRecording(config: RecordScreenConfigType = {}) {
    this.setup(config);
    return RS.startRecording();
  }

  stopRecording() {
    return RS.stopRecording();
  }

  clean() {
    return RS.clean();
  }
}

const ReactNativeRecordScreen = new ReactNativeRecordScreenClass();

export default ReactNativeRecordScreen;
