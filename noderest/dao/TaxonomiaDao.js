function TaxonomiaDao(connection){
    this.connection = connection;
}

TaxonomiaDao.prototype.getAll = function(callback){
    this.connection.query('SELECT * FROM TAXONOMIA', callback);
}

TaxonomiaDao.prototype.getByTaxonomia = function(taxonomia, callback){
    this.connection.query('SELECT * FROM TAXONOMIA WHERE ID = ?', taxonomia.id, callback);
}

TaxonomiaDao.prototype.getByDominio = function(dominio, callback){
    this.connection.query('SELECT * FROM TAXONOMIA WHERE ID IN('
        +' SELECT ID_TAXONOMIA FROM DOMINIO WHERE ID = ?)',
        dominio.id, callback);
}

TaxonomiaDao.prototype.getByClasse = function(classe, callback){
        this.connection.query('SELECT * FROM TAXONOMIA WHERE ID IN ('
        +' SELECT ID_TAXONOMIA FROM DOMINIO WHERE ID IN('
        +' SELECT ID_DOMINIO FROM CLASSE WHERE ID = ?))',
        classe.id, callback);
}

TaxonomiaDao.prototype.getByDiagnostico = function(diagnostico, callback){
    this.connection.query('SELECT * FROM TAXONOMIA WHERE ID IN('
        +' SELECT ID_TAXONOMIA FROM DOMINIO WHERE ID IN ('
        +' SELECT ID_DOMINIO FROM CLASSE WHERE ID IN('
        +' SELECT ID_CLASSE FROM DIAGNOSTICO WHERE ID = ?)))',
        diagnostico.id, callback);
}

module.exports = function(){
    return TaxonomiaDao;
}