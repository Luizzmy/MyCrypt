
const User = require('../models/User');
const bcrypt = require('bcrypt');
const passport = require('passport');
// const router = require('../routes/auth')

exports.signup = async (req, res) => {
  const hashPass = bcrypt.hashSync(password, bcrypt.genSalt(12))

  const newUser = await User.create({
    email,
    password,
  })
  newUser.password = null
  res.status(201).json(newUser)
}




exports.login = async (req, res, next) => {
  passport.authenticate('local', (err, user, failureDetails) => {
    if (err) {
      return res
        .status(500)
        .json({ message: 'Something went wrong ' })
    }
    if (!user) {
      return res.status(401).json(failureDetails)
    }



    req.login(user, err => {
      if (err) {
        return res
          .status(500)
          .json({ message: 'Something went wrong authenticating' })
      }
      user.password = null
      res.status(200).json(user)
    })
  })(req, res, next)
}

exports.currentUser = (req, res) => {
  res.json(req.user || null)
}

exports.logout = (req, res) => {
  req.logout()
  res.status(200).json({ message: 'logged out' })
}

exports.googleInit = passport.authenticate('google', {
  scope: [
    "https://www.googleapis.com/auth/userinfo.profile",
    "https://www.googleapis.com/auth/userinfo.email"
  ]
})

exports.googleCb = (req, res, next) => {
  passport.authenticate('google', (err, user, errDetails) => {
    if (err) return res.status(500).json({ err, errDetails })
    if (!user) return res.status(401).json({ err, errDetails })

    req.login(user, err => {
      if (err) return res.status(500).json({ err })
      return res.redirect(process.env.NODE_ENV === 'development' ?
        'http://localhost:3001/profile' : '/profile')
    })
  })(req, res, next)
}