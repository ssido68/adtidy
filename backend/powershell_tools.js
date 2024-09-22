const { command } = require('@josephuspaye/powershell');


async function commandToJson(psCommand) {
    try {
        const { result } = await command(
            psCommand,
            {
                convertTo: 'json',
            }
        );
        console.log(JSON.stringify(result, null, '  '));
    } catch (error) {
        console.error('unable to run powershell command', error);
    }
}


module.exports = {
    commandToJson
}


// END OF FILE
const path = require('path');
console.log(">  " + path.basename(__filename) + " loaded.")