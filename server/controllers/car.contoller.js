const Car = require("../models/car.model")

module.exports.getAllCars = (req,res)=>{
    Car.find()
        .then(allCars =>{res.json(allCars)})
        .catch(err =>console.log(err))
}

module.exports.createCars = (req,res)=>{
    Car.create(req.body)
        .then(allCars=>{
            res.json(allCars)
        })
        .catch(err=>console.log(err))
}

module.exports.getOneCar = (req,res)=>{
    Car.findById(req.params.id)
        .then(allCars=>res.json(allCars))
        .catch(err=>console.log(err))
}

module.exports.UpdateCar = (req,res)=>{
    Car.findByIdAndUpdate(req.params.id , req.body, {new:true})
        .then(allCars=>res.json(allCars))
        .catch(err=>console.log(err))
}

module.exports.deleteCar = (req,res)=>{
    Car.findByIdAndDelete(req.params.id)
        .then(deleteConfirm =>res.json(deleteConfirm))
        .catch(err=>console.log(err))
    }