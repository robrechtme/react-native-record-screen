export declare type RecordingStartResponse = 'started' | 'permission_error';
export declare type RecordScreenConfigType = {
    mic?: boolean;
};
export declare type RecordingSuccessResponse = {
    status: 'success';
    result: {
        outputURL: string;
    };
};
export declare type RecordingErrorResponse = {
    status: 'error';
    result: any;
};
export declare type RecordingResponse = RecordingSuccessResponse | RecordingErrorResponse;
declare class ReactNativeRecordScreenClass {
    private _screenWidth;
    private _screenHeight;
    setup(config?: RecordScreenConfigType): void;
    startRecording(config?: RecordScreenConfigType): Promise<RecordingStartResponse>;
    stopRecording(): Promise<RecordingResponse>;
    clean(): Promise<string>;
}
declare const ReactNativeRecordScreen: ReactNativeRecordScreenClass;
export default ReactNativeRecordScreen;
