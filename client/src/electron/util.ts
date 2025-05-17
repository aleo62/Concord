import { ipcMain, WebFrameMain } from "electron";
import { pathToFileURL } from "url";
import { getUIPath } from "./pathResolver.js";

export const isDev = () => {
    return process.env.NODE_ENV === "development";
};

export const validateEventFrame = (frame: WebFrameMain) => {
    const frameUrl = new URL(frame.url);

    // Permite localhost em desenvolvimento
    if (isDev() && frameUrl.host === "localhost:5123") {
        return;
    }

    // Lista de endpoints permitidos
    const allowedEndpoints = [
        pathToFileURL(getUIPath()).toString(),
        "https://api.seu-dominio.com",
        "https://cdn.seu-dominio.com",
    ];

    const isAllowed = allowedEndpoints.some((endpoint) =>
        frameUrl.toString().startsWith(endpoint)
    );

    if (!isAllowed) {
        throw new Error(`Access denied: ${frameUrl.toString()}`);
    }
};

export const ipcMainOn = <T extends keyof EventPayloadsMapping>(
    key: T,
    handler: (payload: EventPayloadsMapping[T]) => void
) => {
    ipcMain.on(key, (event, payload) => {
        console.log("Received event:", key, payload);
        if (event.senderFrame) {
            try {
                validateEventFrame(event.senderFrame);
                handler(payload);
            } catch (error) {
                console.error("Frame validation failed:", error);
            }
        }
    });
};
