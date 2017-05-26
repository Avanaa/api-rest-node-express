module.exports = function(app){

    app.get('/taxonomia', function(req, res){
        
        var connection = app.persistence.connectionFactory();
        var dao = new app.dao.TaxonomiaDao(connection);
        
        dao.getAll(function(erro, resultado){
            if(erro){
                res.status(400).json(app.files.erro);
                return;
            }
            res.json(resultado);
        });
    });

    app.get('/taxonomia/:id', function(req, res){

        var id = req.params.id;
        var taxonomia = {};
        taxonomia.id = id;

        var connection = app.persistence.connectionFactory();
        var dao = new app.dao.TaxonomiaDao(connection);

        dao.getByTaxonomia(taxonomia, function(erro, resultado){
            if(erro){
                res.status(400).json(app.files.erro);
                return;
            }
            res.json(resultado);
        });
    });

    app.get('/taxonomia/dominio/:id', function(req, res){

        var id = req.params.id;
        var dominio = {};
        dominio.id = id;

        var connection = app.persistence.connectionFactory();
        var dao = new app.dao.TaxonomiaDao(connection);

        dao.getByDominio(dominio, function(erro, resultado){
            if(erro){
                res.status(400).json(app.files.erro);
                return;
            }
            res.json(resultado);
        });
    });

    app.get('/taxonomia/classe/:id', function(req, res){
        var id = req.params.id;
        var classe = {};
        classe.id = id;
        
        var connection = app.persistence.connectionFactory();
        var dao = new app.dao.TaxonomiaDao(connection);

        dao.getByClasse(classe, function(erro, resultado){
            if(erro){
                res.status(400).json(app.files.erro);
                return;
            }
            res.json(resultado);
        });
    });

    app.get('/taxonomia/diagnostico/:id', function(req, res){
        var id = req.params.id;
        var diagnostico = {};
        diagnostico.id = id;

        var connection = app.persistence.connectionFactory();
        var dao = new app.dao.TaxonomiaDao(connection);

        dao.getByDiagnostico(diagnostico, function(erro, resultado){
            if(erro){
                res.status(400).json(app.files.erro);
                return;
            }
            res.json(resultado);
        });
    });
}