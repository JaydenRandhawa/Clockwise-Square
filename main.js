const { app, BrowserWindow, ipcMain } = require('electron')

app.on("ready", () => {

    const formWin = new BrowserWindow({
        webPreferences: {
          nodeIntegration: true
        }
      })

      formWin.loadFile("main.html");

      ipcMain.on("inpNum", function(event, arg){

        const resultsWin = new BrowserWindow({
          webPreferences: {
            nodeIntegration: true
          }
        });

        resultsWin.loadFile("result.html");

        resultsWin.webContents.on('did-finish-load', ()=>{
          resultsWin.webContents.send('recvNum', arg);
        })
        formWin.close();
      });
});