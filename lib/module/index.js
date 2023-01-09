function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { NativeModules, Dimensions } from 'react-native';
const {
  RecordScreen
} = NativeModules;
const RS = RecordScreen;

class ReactNativeRecordScreenClass {
  constructor() {
    _defineProperty(this, "_screenWidth", Dimensions.get('window').width);

    _defineProperty(this, "_screenHeight", Dimensions.get('window').height);
  }

  setup() {
    let config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const conf = Object.assign({
      mic: true,
      width: this._screenWidth,
      height: this._screenHeight
    }, config);
    RS.setup(conf);
  }

  async startRecording() {
    let config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    this.setup(config);
    return new Promise((resolve, reject) => {
      RS.startRecording().then(resolve).catch(reject);
    });
  }

  stopRecording() {
    return new Promise((resolve, reject) => {
      RS.stopRecording().then(resolve).catch(reject);
    });
  }

  clean() {
    return new Promise((resolve, reject) => {
      RS.clean().then(resolve).catch(reject);
    });
  }

}

const ReactNativeRecordScreen = new ReactNativeRecordScreenClass();
export default ReactNativeRecordScreen;
//# sourceMappingURL=index.js.map