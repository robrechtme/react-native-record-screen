"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactNative = require("react-native");

const {
  RecordScreen
} = _reactNative.NativeModules;
const RS = RecordScreen;

class ReactNativeRecordScreenClass {
  setup() {
    let config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    const {
      width,
      height
    } = _reactNative.Dimensions.get('window');

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
var _default = ReactNativeRecordScreen;
exports.default = _default;
//# sourceMappingURL=index.js.map