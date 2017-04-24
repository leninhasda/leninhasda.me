module.exports = function(app){
    var prefix = '/api/v0';

    app.get(prefix + '/', function(req, res){
        baseUrl = req.protocol + '://' + req.hostname + prefix;
        dataPath = {
            root:       baseUrl + '/root',
            about:      baseUrl + '/about',
            projects:   baseUrl + '/projects',
            skills:     baseUrl + '/skills',
            play:       baseUrl + '/play',
            contact:    baseUrl + '/contact',
        };

        res.json(dataPath);
    });

    app.get(prefix + '/root', function(req, res){
        var data = require('./data/root.json');
        res.json(data);
    });

    app.get(prefix + '/about', function(req, res){
        var data = require('./data/about.json');
        res.json(data);
    });

    app.get(prefix + '/projects', function(req, res){
        var data = require('./data/projects.json');
        res.json(data);
    });

    app.get(prefix + '/skills', function(req, res){
        var data = require('./data/skills.json');
        res.json(data);
    });

    app.get(prefix + '/play', function(req, res){
        var data = require('./data/play.json');
        res.json(data);
    });

    app.get(prefix + '/contact', function(req, res){
        var data = require('./data/contact.json');
        res.json(data);
    });
};