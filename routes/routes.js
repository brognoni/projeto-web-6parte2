var express=require('express');
var routes= express.Router();
var controllers= require('../controllers');

routes.get('/',controllers.homeController.index);
routes.get('/home',controllers.homeController.home);

routes.get('/resenha',controllers.resenhaController.index);
routes.get('/resenha/add',controllers.resenhaController.add);
routes.post('/resenha/add',controllers.resenhaController.save);
routes.get('/resenha/edit/(:id)',controllers.resenhaController.edit);
routes.post('/resenha/edit/(:id)',controllers.resenhaController.update);

module.exports=routes;