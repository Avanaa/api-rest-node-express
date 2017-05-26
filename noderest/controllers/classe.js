module.exports = function(app){
    
    app.get('/classe', function(req, res){
        var connection = app.persistence.connectionFactory();
        var dao = new app.dao.ClasseDao(connection);

        dao.getAll(function(erro, resultado){
            if(erro){
                res.status(500).json(app.files.erroselect);
                return;
            }
            res.json(resultado);
        });
    });

    app.get('/classe/taxonomia/:id', function(req, res){

        var id = req.params.id;
        var taxonomia = {};
        taxonomia.id = id;

        var connection = app.persistence.connectionFactory();
        var dao = new app.dao.ClasseDao(connection);

        dao.getByTaxonomia(taxonomia, function(erro, resultado){
            if(erro){
                res.status(500).json(app.files.erroselect);
            }
            res.json(resultado);
        });
    });

    app.get('/classe/dominio/:id', function(req, res){
        var id = req.params.id;
        var dominio = {};
        dominio.id = id;

        var connection = app.persistence.connectionFactory();
        var dao = new app.dao.ClasseDao(connection);

        dao.getByDominio(dominio, function(erro, resultado){
            if(erro){
                res.status(500).json(app.files.erroselect);
                return;
            }
            res.json(resultado);
        });
    });

    app.get('/classe/:id', function(req, res){

        var id = req.params.id;
        var classe = {};
        classe.id = id;

        var connection = app.persistence.connectionFactory();
        var dao = new app.dao.ClasseDao(connection);

        dao.getByClasse(classe, function(erro, resultado){
            if(erro){
                res.stauts(500).json(app.files.erroselect);
                return;
            }
            res.json(resultado);
        });
    });

    app.get('/classe/diagnostico/:id', function(req, res){

        var id = req.params.id;
        var diagnostico = {};
        diagnostico.id = id;

        var connection = app.persistence.connectionFactory();
        var dao = new app.dao.ClasseDao(connection);

        dao.getByDiagnostico(diagnostico, function(erro, resultado){
            if(erro){
                res.status(500).json(app.files.erroselect);
            }
            res.json(resultado);
        });
    });

    app.post('/classe', function(req, res){

        var classe = req.body;

        var connection = app.persistence.connectionFactory();
        var dao = new app.dao.ClasseDao(connection);

        dao.salva(classe, function(erro, resultado){
            if(erro){
                res.status(500).json(app.files.erroinsert);
            }
            res.stauts(201).json(app.files.sucesso)
        })
    });

    app.delete('/classe/:id', function(req, res){
        
        var id = req.params.id;
        var classe = {};
        classe.id = id;

        var connection = app.persistence.connectionFactory();
        var dao = new app.dao.ClasseDao(connection);

        dao.delete(classe, function(erro, resultado){
            if(erro){
                res.status(500).json()
            }
            res.status(202).json(app.files.sucesso);
        });
    });

    app.put('/classe/:id', function(req, res){
        
        var id = req.params.id;
        var classe = {};
        classe.id = id;

        var connection = app.persistence.connectionFactory();
        var dao = new app.dao.ClasseDao(connection);

        dao.atualiza(classe, function(erro, resultado){
            if(erro){
                res.status(500).json(app.files.erroupdate);
                return;
            }
            res.status(202).json(app.files.sucesso);
        });
    });
}