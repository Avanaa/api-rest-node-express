function ClasseDao(connection){
    this.connection = connection;
}

ClasseDao.prototype.getAll = function(callback){
    this.connection.query('SELECT * FROM CLASSE_VIEW',
        callback);
}

ClasseDao.prototype.getByTaxonomia = function(taxonomia, callback){
    this.connection.query('SELECT * FROM CLASSE_VIEW' 
        +' WHERE ID_DOMINIO IN (SELECT ID FROM DOMINIO WHERE ID_TAXONOMIA = ?)',
        taxonomia.id, callback);
}

ClasseDao.prototype.getByDominio = function(dominio, callback){
    this.connection.query('SELECT * FROM CLASSE_VIEW'
        +' WHERE ID_DOMINIO = ?',
        dominio.id, callback);
}

ClasseDao.prototype.getByClasse = function(classe, callback){
    this.connection.query('SELECT * FROM CLASSE_VIEW'
        +' WHERE ID = ?',
        classe.id, callback);
}

ClasseDao.prototype.getByDiagnostico = function(diagnostico, callback){
    this.connection.query('SELECT * FROM CLASSE_VIEW' 
        +' WHERE ID = (SELECT ID_CLASSE FROM DIAGNOSTICO WHERE ID = ?)',
        diagnostico.id, callback);
}

ClasseDao.prototype.salva = function(classe, callback){
    
    classe.data_criacao = new Date;
    classe.data_alteracao = new Date;
    
    this.connection.query('INSERT INTO CLASSE SET ?', 
        classe, callback);
}

ClasseDao.prototype.delete = function(classe, callback){

    classe.ativo = false;
    classe.data_alteracao = new Date;
    
    this.connection.query('UPDATE CLASSE SET ATIVO = ?, DATA_ALTERACAO = ? WHERE ID = ?',
        [classe.ativo, classe.data_alteracao, classe.id], callback);
}

ClasseDao.prototype.atualiza = function(classe, callback){

    classe.ativo = true;
    classe.data_alteracao = new Date;
    
    this.connection.query('UPDATE CLASSE SET ATIVO = ?, DATA_ALTERACAO = ? WHERE ID = ?', 
        [classe.ativo, classe.data_alteracao, classe.id], callback);
    }

module.exports = function(){
    return ClasseDao;
}