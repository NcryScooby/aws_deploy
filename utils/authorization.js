// Configura o arquivo .env
require("dotenv").config();

const authorization = (req, res, next) => {
  const { authorization } = req.headers;
  if (authorization === process.env.API_KEY) {
    next();
  } else {
    res.status(401).json({
      error: "Unauthorized",
    });
  }
};

module.exports = authorization;
