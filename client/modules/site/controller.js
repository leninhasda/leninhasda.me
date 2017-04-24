module.exports = function(app) {

    app.get('/', function(req, res){
        res.render('index');
    });

    app.get('/template/root', function(req, res){
        res.render('template/root');
    });

    app.get('/template/about', function(req, res){
        res.render('template/about');
    });

    app.get('/template/projects', function(req, res){
        res.render('template/projects');
    });

    app.get('/template/skiils', function(req, res){
        res.render('template/skiils');
    });

    app.get('/template/play', function(req, res){
        res.render('template/play');
    });

    app.get('/template/contact', function(req, res){
        res.render('template/contact');
    });
};