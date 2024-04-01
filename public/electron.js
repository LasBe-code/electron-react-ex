const { app, BrowserWindow, globalShortcut, ipcMain } = await import(
  "electron"
);
const path = await import("path");
const isDev = await import("electron-is-dev");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      devTools: true,
      contextIsolation: false, // TypeError: window.require is not a function
    },
  });

  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  if (isDev) {
    mainWindow.webContents.openDevTools({ mode: "detach" });
  }

  mainWindow.setResizable(true);
  mainWindow.on("closed", () => {
    globalShortcut.unregisterAll();
    mainWindow = null;
    app.quit();
  });
  mainWindow.focus();
}

app.on("ready", () => {
  createWindow();
  globalShortcut.register("Alt+CommandOrControl+I", () => {});
  globalShortcut.register("Shift+Alt+CommandOrControl+f12", () => {
    mainWindow.webContents.toggleDevTools();
  });
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    globalShortcut.unregisterAll();
    app.quit();
  }
});

app.on("will-quit", () => {
  globalShortcut.unregisterAll();
});

ipcMain.on("event", (_, arg) => {
  console.log(arg);
});
