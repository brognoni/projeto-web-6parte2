var homeController=function(){}

homeController.index=function(req,res){
    req.flash('success', 'Welcome to Home')
    res.render('home/index',{title:'Resenha de Filme'});
}

homeController.home=function(req,res){
    req.flash('success', 'Welcome to Home')
    res.render('home/home',{title:'Resenha de Filme'});
}

module.exports=homeController