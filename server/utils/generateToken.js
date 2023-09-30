import jwt from 'jsonwebtoken'
import createError from 'http-errors'

export const AccessToken = (userId) => {
  return new Promise((resolve, reject) => {
    const payload = {}
    const secret = process.env.SECRET_KEY
    const options = {
      expiresIn: "20m",
      issuer: "soulshare",
      audience: userId.toString()
    }
    jwt.sign(payload, secret, options, (err, token) => {
      if (err) {
        console.log(err.message)
        reject(createError.InternalServerError())
      }
      resolve(token)
    })
  })
}

export const verifyAccessToken = (req, res, next) => {
  const token = req.cookies.AccessToken
  jwt.verify(token, process.env.SECRET_KEY, (err, payload) => {
    if (err) {
      const message = err.name === 'JsonwebError' ? 'Unauthorized' : err.message
      return next(createError.Unauthorized(message))
    }
    req.payload = payload;
    next();
  });
}

export const RefreshToken = (userId) => {
  return new Promise((resolve, reject) => {
    const payload = {}
    const secret = process.env.REFRESH_KEY
    const options = {
      expiresIn: "30d",
      issuer: "soulshare",
      audience: userId.toString()
    }
    jwt.sign(payload, secret, options, (err, token) => {
      if (err) {
        console.log(err.message)
        reject(createError.InternalServerError())
      }
      resolve(token)
    })
  })
}
export const verifyRefreshToken = (refreshToken) => {
  return new Promise((resolve, reject) => {
    jwt.verify(refreshToken, process.env.REFRESH_KEY, (err, payload) => {
      if (err) {
        console.log(err.message)
        reject(createError.Unauthorized())
      }
      const userId = payload.aud
      resolve(userId)
    })
  })
}


