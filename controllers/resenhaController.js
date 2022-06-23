var resenhaModel= require('../models/resenhaModel');
var resenhaController=function(){}

resenhaController.index=function(req,res,next){
    resenhaModel.getAllresenha(function(err,resenha){
        if(err){
                throw err;
        }else{
            res.render('resenha/index',{title:'Resenha Listagem',resenha:resenha});
        }
       
    });
}
resenhaController.add=function(req,res,next){
    res.render('resenha/add',{title:'Add resenha'});
}
resenhaController.save=function(req,res){
    req.assert('nome', 'Nome é Requirido').notEmpty(); 
    req.assert('autor', 'Autor é Requirido').notEmpty();
    req.assert('resenha', 'Resenha é requirido.').notEmpty();
    req.assert('categoria', 'Categoria tem que ser selecionada.').notEmpty();
    // req.assert('data_de_publi', 'Data de publicação não pode ser vazia.').notEmpty();
    req.assert('link_imagem', 'Link da imagem.').notEmpty()
 
    var errors = req.validationErrors();
    if( !errors ) {
        var newTask={
            autor: req.sanitize('autor').escape().trim(),
            nome: req.sanitize('nome').escape().trim(),
            categoria: req.sanitize('categoria').escape().trim(),
            resenha: req.sanitize('resenha').escape().trim(),
            // data_de_publi: dateFormat(req.sanitize('data_de_publi').trim(), 'yyyy-mm-dd'),
            link_imagem: req.sanitize('link_imagem').escape().trim(),
            
        }
        resenhaModel.insertresenha(newTask,function(err){
            if(err){
                req.flash('error','There was error in inserting data');
        }else{
            req.flash('success','resenha added succesfully');
        }
        res.redirect('/resenha');
        });
    }else{
        var err_msg="";
        errors.forEach(function(err){
            err_msg+=err.msg+"<br/>";
        })
         req.flash('error', err_msg);
         res.render('resenha/add',{title:'Add resenha'});
    }
}
resenhaController.edit=function(req,res){
    var resenhaId=req.params.id;
    resenhaModel.findresenhaById(resenhaId,function(result){
        if(result==null){
            req.flash('error','Sorry the resenha doesnot exists!!');
            res.redirect('/resenha');
        }else{
          res.render('resenha/edit',{title:'Edit resenha',resenha:result});
        }
    })
}

resenhaController.update=function(req,res){
    var resenhaId=req.params.id;
    req.assert('nome', 'Nome é Requirido').notEmpty(); 
    req.assert('autor', 'Autor é Requirido').notEmpty();
    req.assert('resenha', 'Resenha é requirido.').notEmpty();
    req.assert('categoria', 'Categoria tem que ser selecionada.').notEmpty()
    var errors = req.validationErrors();
    if( !errors ) {
        var resenha={
            autor: req.sanitize('autor').escape().trim(),
            nome: req.sanitize('nome').escape().trim(),
            categoria: req.sanitize('categoria').escape().trim(),
            resenha: req.sanitize('resenha').escape().trim(),
        }
        resenhaModel.updateresenha(resenhaId,resenha,function(result){
                if(result.affectedRows==1){
                    req.flash('success', 'resenha Information update successfully.');
                    res.redirect('/resenha');
                }else{
                    req.flash('error', 'There was error in updating resenha.');
                    res.redirect('/resenha/edit/'+resenhaId);  
                }
        });
    }else{
        var err_msg="";
        errors.forEach(function(err){
            err_msg+=err.msg+"<br/>";
        })
         req.flash('error', err_msg);
         res.redirect('/resenha/edit/'+resenhaId);
    }
}

module.exports=resenhaController;