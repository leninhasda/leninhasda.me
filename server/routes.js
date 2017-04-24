var fs = require('fs');
var modulesDir = __dirname + '/modules';

var viewsDir = [];

function chooseFileToInit(modulePath) {
    var indexFile       = modulePath + '/index.js',
        controllerFile  = modulePath + '/controller.js',
        routeFile       = modulePath + '/route.js';

    if( fs.existsSync(indexFile) ) {
        return indexFile;
    }
    else if( fs.existsSync(controllerFile) ) {
        return controllerFile;
    }
    else if( fs.existsSync(routeFile) ) {
        return routeFile;
    }
    return '';
}

module.exports.init = function(app){
    fs.readdirSync(modulesDir).forEach(function(moduleName){
        var modulePath      = modulesDir + '/' + moduleName,
            viewPath        = modulePath + '/views';

        var initFile = chooseFileToInit(modulePath);

        if( initFile.length > 0 ) {
            module = require(initFile)(app);
            if( fs.existsSync(viewPath) ) {
                viewsDir.push(viewPath);
            }
        }
        else {
            console.log(modulePath + ' is not a correct module');
        }
    });;

    // set view paths
    app.set('views', viewsDir);
};