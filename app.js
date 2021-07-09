const {app, BrowserWindow} = require('electron');
const path = require('path');
//const serve = require('ray-serve');
//const fs = require('ray-fs');
const src = "src";
const UI = path.join(src, "UI");
let mainWin;
const theme = {
  backgroundColor:"#00f",
  maxWidth: 1200,
  maxHeight: 800,
  frame: false,
  minWidth: 300,
  minHeight: 200,
}

function whenReady(){
  const mainWinUI = path.join("file://", __dirname, UI, "mainWin.html");
  mainWin = new BrowserWindow(theme);
  mainWin.webContents.loadURL(mainWinUI);
  console.log("app is ready");
}

function whenClosed(){
  mainWin = null;
}

app.on("ready", whenReady);

app.on("closed", whenClosed);
