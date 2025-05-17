import { ipcRenderer } from "electron/renderer";

const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("electron", {
    getStaticData: (data: string) => {
        console.log(data);
    },
    sendFrameAction: (payload) => ipcSend("sendFrameAction", payload),
} satisfies Window["electron"]);

export const ipcSend = <T extends keyof EventPayloadsMapping>(
    key: T,
    payload: EventPayloadsMapping[T]
) => {
    console.log("sendFrameAction", key, payload);
    ipcRenderer.send(key, payload);
};
