const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
    installApps: (apps) => ipcRenderer.send("request-mainprocess-action", apps),
});
