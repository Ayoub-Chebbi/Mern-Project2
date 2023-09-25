const UserControllers = require("../controllers/user.controller")
const CarContollers = require("../controllers/car.contoller")

module.exports = (app)=>{
    app.post("/api/register" , UserControllers.registerUser)
    app.post("/api/login" , UserControllers.loginUser)
    app.get("/api/allusers" , UserControllers.getAllUsers)
    app.get("/api/user/:id" , UserControllers.getOneUser)
    app.delete("/api/user/:id" , UserControllers.deleteUser)
    app.get("/api/cars" , CarContollers.getAllCars)
    app.get("/api/car/:id" , CarContollers.getOneCar)
    app.put("/api/user/:id" , UserControllers.UpdateUser)
    app.post("/api/car" , CarContollers.createCars)
    app.delete("/api/car/:id" , CarContollers.deleteCar)
}