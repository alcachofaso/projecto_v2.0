var User = require('../models/user.model');

function loginUser(req, res) {

    var paramsBody = req.body;
    console.log(paramsBody);

    User.findOne({ 'email': paramsBody.email }).exec((err, userInfo) => {
        if (err) {
            return res.status(500).send({ message: "Error, el servidor no pudo procesar esta solicitud" });
        } else {
            if (!userInfo) {
                return res.status(404).send({ message: "Acceso denegado, el usuario no existe." });
            } else {
                return res.status(200).send({ message: "Bienvenido! tus datos son:", userInfo: userInfo });
            }
        }
    });
}
function getUsers(req, res) {
    User.find({}).exec((err, users) => {
        if(err){
            return res.status(500).send({message: "error servidor"});
        } else {
            if(!users){
                return res.status(404).send({message: "no existen usuarios"});
            } else {
                return res.status(200).send({message: "wena!", users: users});
            }
        }
    });
}
module.exports = {
    loginUser,
    getUsers
}