const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;

function generateToken(payload) {
  return new Promise(
    (resolve, reject) => {
      jwt.sign(
        payload,
        jwtSecret,
        {
          expiresIn: '7d'
        }, (error, token) => {
          resolve(token);
        }
      )
    }
  )
}

exports.generateToken = generateToken;
