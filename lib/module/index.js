import { NativeModules, Dimensions } from 'react-native';
const {
  RecordScreen
} = NativeModules;
const RS = RecordScreen;

class ReactNativeRecordScreenClass {
  setup() {
    let config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const {
      width,
      height
    } = Dimensions.get('window');
    RS.setup({
      mic: true,
      width,
      height,
      fps: 60,
      bitrate: 1920 * 1080 * 144,
      ...config
    });
  }

  startRecording() {
    let config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
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
//# sourceMappingURL=index.js.map