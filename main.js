const { app, BrowserWindow, ipcMain } = require('electron')

app.on("ready", () => {

    const formWin = new BrowserWindow({
        webPreferences: {
          nodeIntegration: true
        }
      })
    
      formWin.loadFile("main.html");

      const resultsWin = new BrowserWindow({
        webPreferences: {
          nodeIntegration: true
        }
      });

      resultsWin.loadFile("result.html");

      ipcMain.on("number:add", function(e, item){

        console.log(item);

        resultsWin.webContents.send("number:add", item);
        formWin.close();
      });
});