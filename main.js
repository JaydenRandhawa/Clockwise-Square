const { app, BrowserWindow, ipcMain } = require('electron')

app.on("ready", () => {

    const formWin = new BrowserWindow({
        webPreferences: {
          nodeIntegration: true
        }
      })

      formWin.loadFile("main.html");

      ipcMain.on("number:add", function(e, item){

        const resultsWin = new BrowserWindow({
          webPreferences: {
            nodeIntegration: true
          }
        });

        resultsWin.loadFile("result.html");

        console.log(item);

        resultsWin.webContents.send("number:add", item);
        formWin.close();
      });
});