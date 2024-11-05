const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

process.env.ELECTRON_RUN_AS_NODE = "1";

function createWindow() {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false, // Depending on your security needs, consider enabling context isolation
        }
    });

    // Load the index.html of the app.
    const appURL = isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../examples/index.html')}`;
    mainWindow.loadURL(appURL);

    // Open the DevTools automatically if in development mode
    if (isDev) {
        mainWindow.webContents.openDevTools();
    }
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
