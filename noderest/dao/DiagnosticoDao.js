function DiagnosticoDao(connection){
    this.connection = connection;
}

DiagnosticoDao.prototype.getAll = function(callback){
    this.connection.query('SELECT * FROM DIAGNOSTICO_VIEW',
        callback);
}

DiagnosticoDao.prototype.getByDominio = function(dominio, callback){
    this.connection.query('SELECT * FROM DIAGNOSTICO_VIEW'
        +' WHERE ID_CLASSE IN (SELECT ID FROM CLASSE WHERE ID_DOMINIO = ?)',
        dominio.id, callback);
}

DiagnosticoDao.prototype.getByClasse = function(classe, callback){
    this.connection.query('SELECT * FROM DIAGNOSTICO_VIEW'
        +' WHERE ID_CLASSE = ?',
        classe.id, callback);
}

DiagnosticoDao.prototype.getByDiagnostico = function(diagnostico, callback){
    this.connection.query('SELECT * FROM DIAGNOSTICO_VIEW'
        + ' WHERE ID = ?',
        diagnostico.id, callback);
}

DiagnosticoDao.prototype.salva = function(diagnostico, callback){
    
    diagnostico.data_criacao = new Date;
    diagnostico.data_alteracao = new Date;
    
    this.connection.query('INSERT INTO DIAGNOSTICO SET ?', 
        diagnostico, callback);
}

DiagnosticoDao.prototype.delete = function(diagnostico, callback){

    diagnostico.ativo = false;
    diagnostico.data_alteracao = new Date;
    
    this.connection.query('UPDATE DIAGNOSTICO SET ATIVO = ?, DATA_ALTERACAO = ? WHERE ID = ?', 
        [diagnostico.ativo, diagnostico.data_alteracao, diagnostico.id], callback);
}

DiagnosticoDao.prototype.atualiza = function(diagnostico, callback){

    diagnostico.ativo = true;
    diagnostico.data_alteracao = new Date;
    
    this.connection.query('UPDATE DIAGNOSTICO SET ATIVO = ?, DATA_ALTERACAO = ? WHERE ID = ?', 
        [diagnostico.ativo, diagnostico.data_alteracao, diagnostico.id], callback);
}

module.exports = function(){
    return DiagnosticoDao;
}