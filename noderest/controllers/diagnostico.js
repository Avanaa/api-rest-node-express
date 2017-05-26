module.exports = function(app){
    
    app.get('/diagnostico', function(req, res){
        var connection = app.persistence.connectionFactory();
        var dao = new app.dao.DiagnosticoDao(connection);

        dao.getAll(function(erro, resultado){
            if(erro){
                res.status(500).json(app.files.erro);
                return;
            }
            res.json(resultado);
        });
    });

    app.get('/diagnostico/dominio/:id', function(req, res){
        
        var id = req.params.id;
        var dominio = {};
        dominio.id = id;

        var connection = app.persistence.connectionFactory();
        var dao = new app.dao.DiagnosticoDao(connection);

        dao.getByDominio(dominio, function(erro, resultado){
            if(erro){
                res.status(500).json(app.files.erro);
                return;
            }
            res.json(resultado);
        });
    });

    app.get('/diagnostico/classe/:id', function(req, res){
        
        var id = req.params.id;
        var classe = {};
        classe.id = id;

        var connection = app.persistence.connectionFactory();
        var dao = new app.dao.DiagnosticoDao(connection);

        dao.getByClasse(classe, function(erro, resultado){
            if(erro){
                res.status(500).json(app.files.erro);
                return;
            }
            res.json(resultado);
        });
    });
    
    app.get('/diagnostico/:id', function(req, res){
        
        var id = req.params.id;
        var diagnostico = {};
        diagnostico.id = id;

        var connection = app.persistence.connectionFactory();
        var dao = new app.dao.DiagnosticoDao(connection);

        dao.getByDiagnostico(diagnostico, function(erro, resultado){
            if(erro){
                res.status(500).json(app.files.erro);
                return;
            }
            res.json(resultado);
        });
    });

    app.post('/diagnostico', function(req, res){

        var diagnostico = req.body;

        var connection = app.persistence.connectionFactory();
        var dao = new app.dao.DiagnosticoDao(connection);

        dao.salva(diagnostico, function(erro, resultado){
            if(erro){
                res.status(500).json(app.files.erroinsert);
                return;
            }
            res.status(201).json(app.files.sucesso);
        });
    });

    app.delete('/diagnostico/:id', function(req, res){
        
        var id = req.params.id;
        var diagnostico = {};
        diagnostico.id = id;

        var connection = app.persistence.connectionFactory();
        var dao = new app.dao.DiagnosticoDao(connection);

        dao.delete(diagnostico, function(erro, resultado){
            if(erro){
                res.status(500).json(app.files.errodelete);
                return;
            }
            res.status(202).json(app.files.sucesso);
        });
    });

    app.put('/diagnostico/:id', function(req, res){
        var id = req.params.id;
        var diagnostico = {};
        diagnostico.id = id;

        var connection = app.persistence.connectionFactory();
        var dao = new app.dao.DiagnosticoDao(connection);

        dao.atualiza(diagnostico, function(erro, resultado){
            if(erro){
                res.status(500).json(app.files.erroupdate);
                return;
            }
            res.status(202).json(app.files.sucesso);
        });
    });
}