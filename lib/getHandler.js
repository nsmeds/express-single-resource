const sander = require('sander');
const resourceDir = './resources/';

function getHandler(reqParams, getResponse) {
    var reqArg = reqParams['0'];
    sander
        .readdir( resourceDir )
        .then( data => {
            if (reqArg === '' || reqArg === '/') getResponse(null, JSON.stringify({data: data}), 'application/json');
            else sander
                .readFile(`${resourceDir}${reqParams['0']}.json`, {'encoding': 'utf-8'})
                .then(data => { getResponse(null, data, 'application/json'); })
                .catch(err => { getResponse(err); });
        })
        .catch(err => { getResponse(err); });

};

module.exports = getHandler;