var Planta = require('../models/planta')

// Planta list
module.exports.List = () =>{
    return Planta.find()
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}

module.exports.getPlanta = id => {
    return Planta.findOne({_id: id})
        .then(dados => {
            return dados
        })
        .catch(erro => {
            return erro
        })
}

module.exports.addPlanta = (p) => {
    return Planta.collection.insertOne(p)
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
  }

module.exports.deletePlanta = id =>{
    return Planta.deleteOne({_id:id})
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}

module.exports.getFreguesias = () =>{
    return Planta.find({},{freguesia: 1})
                .sort({"freguesia" : 1})
                .distinct("freguesia")
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}

module.exports.getEspecies = () =>{
    return Planta.find({},{especies: 1})
                .sort({"especie" : 1})
                .distinct("especie")
                .then(dados=>{
                    return dados
                }
                )
                .catch(erro=>{
                   return erro
                })
}

module.exports.getEEEEEspecie= e => {
    return Planta.find({especie : e})
        .then(dados => {
            return dados
        })
        .catch(erro => {
            return erro
        })
}

module.exports.getAAAImplantacao= i => {
    return Planta.find({implantacao : i})
        .then(dados => {
            return dados
        })
        .catch(erro => {
            return erro
        })
}