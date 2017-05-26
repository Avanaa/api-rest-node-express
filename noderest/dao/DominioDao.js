function DominioDao(connection){
    this.connection = connection;
}

DominioDao.prototype.getAll = function(callback){
    this.connection.query('SELECT * FROM DOMINIO_VIEW'
        +' ON ID_TAXONOMIA = T.ID',
        callback);
}

DominioDao.prototype.getByTaxonomia = function(taxonomia, callback){
    this.connection.query('SELECT * FROM DOMINIO_VIEW'
        +' WHERE ID_TAXONOMIA = ?', 
        taxonomia.id, callback);
}

DominioDao.prototype.getByDominio = function(dominio, callback){
    this.connection.query('SELECT * FROM DOMINIO_VIEW'
        +' WHERE ID = ?', 
        dominio.id, callback);
}

DominioDao.prototype.getByClasse = function(classe, callback){
    this.connection.query('SELECT * FROM DOMINIO_VIEW'
        +' WHERE ID = (SELECT ID_DOMINIO FROM CLASSE WHERE ID = ?)',
        classe.id, callback);
}

DominioDao.prototype.getByDiagnostico = function(diagnostico, callback){
    this.connection.query('SELECT * FROM DOMINIO_VIEW'
        +' WHERE ID IN('
        + 'SELECT ID_DOMINIO FROM CLASSE WHERE ID = ('
        + 'SELECT ID_CLASSE FROM DIAGNOSTICO WHERE ID = ?))',
        diagnostico.id, callback);
}

DominioDao.prototype.salva = function(dominio, callback){
    
    dominio.data_criacao = new Date;
    dominio.data_alteracao = new Date;

    this.connection.query('INSERT INTO DOMINIO SET ?',
        dominio, callback);
}

DominioDao.prototype.delete = function(dominio, callback){

    dominio.ativo = false;
    dominio.data_alteracao = new Date;
    
    this.connection.query('UPDATE DOMINIO SET ATIVO = ?, DATA_ALTERACAO = ? WHERE ID = ?',
        [dominio.ativo, dominio.data_alteracao, dominio.id], callback);
}

DominioDao.prototype.atualiza = function(dominio, callback){

    dominio.ativo = true;
    dominio.data_alteracao = new Date;

    this.connection.query('UPDATE DOMINIO SET ATIVO = ?, DATA_ALTERACAO = ? WHERE ID = ?',
        [dominio.ativo, dominio.data_alteracao, dominio.id], callback);
}

module.exports = function(){
    return DominioDao;
}