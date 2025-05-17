type FrameWindowActions = 'CLOSE' | 'MINIMIZE' | 'MAXIMIZE';

interface Window {
    electron: {
        getStaticData: (payload: string) => void;
        sendFrameAction: (payload: FrameWindowActions) => void;
    };
}

type EventPayloadsMapping = {
    getStaticData: string;
    sendFrameAction: FrameWindowActions;
}
