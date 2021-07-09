const {app, BrowserWindow} = require('electron');
const path = require('path');
//const serve = require('ray-serve');
//const fs = require('ray-fs');
const src = "src";
const UI = path.join(src, "UI");

function whenReady(){
  const mainWinUI = path.join("file://", __dirname, UI, "mainWin.html");
  const mainWin = new BrowserWindow();
  mainWin.webContents.loadURL(mainWinUI);
  console.log("app is ready");
}

app.on("ready", whenReady);
