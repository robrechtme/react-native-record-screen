export declare type RecordingStartResponse = 'started' | 'permission_error';
export declare type RecordScreenConfigType = {
    width?: number;
    height?: number;
    fps?: number;
    bitrate?: number;
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
    result: unknown;
};
export declare type RecordingResponse = RecordingSuccessResponse | RecordingErrorResponse;
declare class ReactNativeRecordScreenClass {
    private setup;
    startRecording(config?: RecordScreenConfigType): Promise<RecordingStartResponse>;
    stopRecording(): Promise<RecordingResponse>;
    clean(): Promise<string>;
}
declare const ReactNativeRecordScreen: ReactNativeRecordScreenClass;
export default ReactNativeRecordScreen;
