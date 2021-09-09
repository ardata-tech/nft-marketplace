import jwt from "jsonwebtoken";

// const dotenv = require('dotenv');
// dotenv.config();
// TOKEN_SECRET = process.env.TOKEN_SECRET;

const TOKEN_SECRET = "JWT_SECRET";

const auth = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (token == null) return res.sendStatus(401);

    jwt.verify(token, TOKEN_SECRET, (err, user) => {

      if (err) return res.sendStatus(403);

      req.address = user.address;

      next();
    });
  } catch (error) {
    console.log(error);
  }
};

export default auth;
