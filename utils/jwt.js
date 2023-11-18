const jwt = require("jsonwebtoken");

function generateToken(user) {
  console.log(user);
  return jwt.sign(user, "secret", { expiresIn: "60m" });
}

function validateToken(req, res, next) {
  const accesToken = req.headers["authorization"];
  if (!accesToken) {
    res.json("Acceso denegado requiere un token");
  } else {
    jwt.verify(accesToken, "secret", (err, user) => {
      if (err) {
        res.json("Acceso denegado, token expirado o incorrecto");
        console.log(err)
      } else {
        next();
      }
    });
  }
}

module.exports = { generateToken, validateToken };
