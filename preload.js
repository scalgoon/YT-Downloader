const { contextBridge, ipcRenderer } = require("electron");
const fs = require('fs');
const ytdl = require('ytdl-core');

contextBridge.exposeInMainWorld('myAPI', {
    sendNotif: (title, body) => ipcRenderer.send('system:sendNotification', { title, body }),
    startProgress: () => ipcRenderer.invoke('system:startProgress'),
    stopProgress: () => ipcRenderer.invoke('system:stopProgress'),
});

contextBridge.exposeInMainWorld('ytdl', {
    getInfo: async (...args) => await ytdl.getBasicInfo(...args)
});