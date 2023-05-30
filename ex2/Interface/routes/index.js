var express = require('express');
var router = express.Router();
var axios = require("axios")

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  axios.get("http://localhost:15030/plantas/")
    .then(response=>{
      res.render('index', {lists: response.data, d: data})
    })
    .catch(erro=>{
      res.render('error', { error: erro,message:"Erro a obter a lista de plantas" });
    })
});

router.get('/:id', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  axios.get("http://localhost:15030/plantas/"+req.params.id)
      .then(dados=>{
        //console.log(JSON.stringify(dados))
        res.render('perfil', { list: dados.data });
      })
      .catch(erro=>{
        res.render('error', { error: erro,message:"Erro a obter a página da planta" });
      })
});

router.get('/especies/:id', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  axios.get("http://localhost:15030/plantas/"+req.params.id)
      .then(dados=>{
        //console.log(JSON.stringify(dados))
        res.render('especie', { list: dados.data });
      })
      .catch(erro=>{
        res.render('error', { error: erro,message:"Erro a obter a página da planta" });
      })
});

module.exports = router;
