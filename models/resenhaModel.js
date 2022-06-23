var sql= require('../db');

var resenhaModel={

}
resenhaModel.getAllresenha=function(result){
    sql.query("SELECT * FROM resenha",function(err,res){
        if(err) {
            return result(err,null);
        }
        else{
         return result(null,res);
        }
    });
}
resenhaModel.insertresenha=function(newresenha,result)
{
    sql.query("INSERT INTO resenha SET ?",newresenha,function(err,res,field){
        if(err){
            return result(err,null);
        }else{
            return result(null,res);
        }
    });
}
resenhaModel.findresenhaById=function(resenhaId,result){
    sql.query("SELECT * FROM resenha WHERE id ="+resenhaId,function(err,rows){
        if(err)
            throw err;
      
        if (rows.length <= 0) {
            return result(err);
        }
        else { 
            return result(rows);
        }   
    })
}

resenhaModel.updateresenha=function(resenhaId,resenha,result){
    sql.query("UPDATE resenha SET  ? WHERE id="+resenhaId,resenha,function(err,rows){
        if(err)
            result(err); 
       
        return result(rows);

    });
}
module.exports=resenhaModel;