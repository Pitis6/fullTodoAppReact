const jwt = require("jsonwebtoken");

function generateToken(user) {
  console.log(user);
  return jwt.sign(user, "secret", { expiresIn: "5m" });
}

function validateToken(req, res, next) {
  const accesToken = req.headers["authorization"];
  if (!accesToken) {
    res.send("Acceso denegado");
  } else {
    jwt.verify(accesToken, "secret", (err, user) => {
      if (err) {
        res.send("Acceso denegado, token expirado o incorrecto");
      } else {
        next();
      }
    });
  }
}

module.exports = { generateToken, validateToken };
