var express = require('express');
var router = express.Router();
var Planta = require('../controllers/planta')

router.get('/plantas', function(req, res, next) {
  if (req.query.implant){
    Planta.getAAAImplantacao(req.query.implant)
      .then(data=>{
        res.json(data)
      })
      .catch(erro=>{
        res.status(601).json({ message: "Erro a obter lista dos registos correspondetes à implantacao AAA",error:erro})
      })

  }
  else if (req.query.especie){
    Planta.getEEEEEspecie(req.query.especie)
      .then(data=>{
        res.json(data)
      })
      .catch(erro=>{
        res.status(601).json({ message: "Erro a obter lista dos registos correspondetes à especie EEEE",error:erro})
      })
  }
  else{
    Planta.List()
      .then(data=>{
        res.json(data)
      })
      .catch(erro=>{
        res.status(601).json({ message: "Erro a obter lista de plantas",error:erro})
      })
  }
});

router.get('/plantas/freguesias', function(req, res, next) {
  Planta.getFreguesias()
    .then(data=>{
      res.json(data)
    })
    .catch(erro=>{
      res.status(602).json({ message: "Erro a obter a lista de freguesias",error:erro })
    })
});

router.get('/plantas/especies', function(req, res, next) {
  Planta.getEspecies()
    .then(data=>{
      res.json(data)
    })
    .catch(erro=>{
      res.status(602).json({ message: "Erro a obter a lista de especies",error:erro })
    })
});

router.get('/plantas/:id', function(req, res, next) {
  Planta.getPlanta(req.params.id)
    .then(data=>{
      res.json(data)
    })
    .catch(erro=>{
      res.status(602).json({ message: "Erro a obter planta",error:erro })
    })
});

router.post('/add', function(req, res, next) {
  Planta.addPlanta(req.body)
    .then(data=>{
      res.status(201).json(data)
    })
    .catch(erro=>{
      res.status(603).json({ message: "Erro a adicionar planta",error:erro })
    })
});

router.delete('/delete/:id', function(req, res, next) {
  Planta.deletePlanta(req.params.id)
    .then(data=>{
      res.json(data)
    })
    .catch(erro=>{
      res.status(605).json({ message: "Erro a eliminar planta",error:erro })
    })
});

module.exports = router;
