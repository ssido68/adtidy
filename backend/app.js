//#region init
//let editorServer = require('datatables.net-editor-server');
const express = require('express')
var cors = require('cors')
const path = require('path');
const bodyParser = require('body-parser');
var db = require('./db');

const app = express()
const port = 4000
//#endregion


const powershell = require('./powershell_tools')
//const lsResult = powershell.commandToJson('get-aduser -filter *') 



//#region server init
const server = app.listen(port, () => console.log(`web server app starting @ localhost:${port}`))
//#endregion