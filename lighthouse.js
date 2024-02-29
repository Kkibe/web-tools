//const fs = require("fs"); 
//import fs from 'fs'
import lighthouse from "lighthouse";
//const lighthouse = require("lighthouse"); 
const chromeLauncher = require("chrome-launcher"); 

const launchChromeAndRunLighthouse = url => {
    chromeLauncher.launch().then(chrome => {
      const opts = {
        port: chrome.port
      };
      lighthouse(url, opts).then(results => {
        chrome.kill();
        console.log(results.report);
        return results.report;
      });
    });
  };


export {launchChromeAndRunLighthouse};