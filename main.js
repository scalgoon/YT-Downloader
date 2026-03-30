const { app, BrowserWindow, dialog, ipcMain, Notification } = require('electron');
const path = require('path');

(async () => {

    function createMainWindow() {

        const mainWindow = new BrowserWindow({
            title: "VideoDeck",
            titleBarStyle: "hidden",
            titleBarOverlay: {
                color: '#74000000',
                symbolColor: '#ffffff'
            },
            resizable: false,
            maximizable: false,
            width: 1024,
            height: 600,
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: true,
                // preload: path.join(__dirname, 'preload.js')
            }
        });

        mainWindow.loadFile(path.join(__dirname, "./src/home.html"));
        mainWindow.setMenuBarVisibility(false);
        mainWindow.center();
        // mainWindow.webContents.openDevTools();
        // mainWindow.setProgressBar(100)

        ipcMain.handle('system:closeApp', () => {
            app.quit();
        });

        // ipcMain.on('system:sendNotification', (event, args) => {
        //     new Notification({ title: args.title, body: args.body }).show()
        // });
    }

    app.whenReady().then(() => {
        createMainWindow();

        app.on('activate', () => {
            if (BrowserWindow.getAllWindows().length === 0) {
                createMainWindow();
            }
        })

    });

    app.on('window-all-closed', () => {
        app.quit();
    })

})();
