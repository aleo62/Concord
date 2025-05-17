import { app, BrowserWindow } from "electron";
import { getPreloadPath, getUIPath } from "./pathResolver.js";
import { ipcMainOn, isDev } from "./util.js";

app.on("ready", () => {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        frame: false,
        webPreferences: {
            preload: getPreloadPath(),
            contextIsolation: true,
            nodeIntegration: false,
        },
    });

    mainWindow.setMenuBarVisibility(false);

    if (isDev()) {
        mainWindow.loadURL("http://localhost:5123");
    } else {
        mainWindow.loadFile(getUIPath());
    }

    ipcMainOn("sendFrameAction", (action) => {
        console.log("Handling frame action:", action);
        switch (action) {
            case "CLOSE":
                mainWindow.close();
                break;
            case "MINIMIZE":
                mainWindow.minimize();
                break;
            case "MAXIMIZE":
                if (mainWindow.isMaximized()) {
                    mainWindow.restore();
                } else {
                    mainWindow.maximize();
                }
                break;
        }
    });
});
