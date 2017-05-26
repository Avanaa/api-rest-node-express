module.exports = function(app){
        
    app.get('/dominio', function(req, res){
        var connection = app.persistence.connectionFactory();
        var dao = new app.dao.DominioDao(connection);

        dao.getAll(function(erro, resultado){
            if (erro){
                res.status(500).json(app.files.erroselect);
                return;
            }
            res.json(resultado);
        });
    });

    app.get('/dominio/taxonomia/:id', function(req, res){

        var id = req.params.id;
        var taxonomia = {};
        taxonomia.id = id;

        var connection = app.persistence.connectionFactory();
        var dao = new app.dao.DominioDao(connection);
        
        dao.getByTaxonomia(taxonomia, function(erro, resultado){
            if(erro){
                res.status(500).json(app.files.erroselect);
                return;
            }
            res.json(resultado);
        });
    });

    app.get('/dominio/:id', function(req, res){
        
        var id = req.params.id;
        var dominio = {};
        dominio.id = id;

        var connection = app.persistence.connectionFactory();
        var dao = new app.dao.DominioDao(connection);
        
        dao.getByDominio(dominio, function(erro, resultado){
            if(erro){
                res.status(500).json(app.files.erroselect);
                return;
            }
            res.json(resultado);
        });
    });

    app.get('/dominio/classe/:id', function(req, res){
        var id = req.params.id;
        var classe = {};
        classe.id = id;

        var connection = app.persistence.connectionFactory();
        var dao = new app.dao.DominioDao(connection);

        dao.getByClasse(classe, function(erro, resultado){
            if(erro){
                res.status(500).json(app.files.erroselect);
                return;
            }
            res.json(resultado);
        })
    });

    app.get('/dominio/diagnostico/:id', function(req, res){
        var id = req.params.id;
        var diagnostico = {};
        diagnostico.id = id;

        var connection = app.persistence.connectionFactory();
        var dao = new app.dao.DominioDao(connection);

        dao.getByDiagnostico(diagnostico, function(erro, resultado){
            if(erro){
                res.status(500).json(app.files.erroselect);
                return;
            }
            res.json(resultado);
        });
    });

    app.post('/dominio', function(req, res){

        //Validações devem vir aqui

        var dominio = req.body;

        var connection = app.persistence.connectionFactory();
        var dao = new app.dao.DominioDao(connection);

        dao.salva(dominio, function(erro, resultado){
            if(erro){
                res.status(500).json(app.files.erroinsert);
                return;
            }
            res.status(201).json(app.files.sucesso);
        });
    });

    app.delete('/dominio/:id', function(req, res){

        var id = req.params.id;
        var dominio = {};
        dominio.id = id;

        var connection = app.persistence.connectionFactory();
        var dao = new app.dao.DominioDao(connection);
        
        dao.delete(dominio, function(erro, resultado){
            if(erro){
                res.status(500).json(app.files.errodelete);
                return;
            }
            res.json(202).json(app.files.sucesso);
        });
    });

    app.put('/dominio/:id', function(req, res){

        var id = req.params.id;
        var dominio = {};
        dominio.id = id;

        var connection = app.persistence.connectionFactory();
        var dao = new app.dao.DominioDao(connection);

        dao.atualiza(dominio, function(erro, resultado){
            if(erro){
                res.status(500).json(app.files.erroupdate);
            }
            res.status(202).json(app.files.sucesso);
        });
    });
}