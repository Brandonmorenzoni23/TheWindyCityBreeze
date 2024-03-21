const LocalStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')
const User = require('../models/user')

module.exports = function (passport) {
  console.log('Passport loaded')
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, function (
      email,
      password,
      done
    ) {
      User.findOne({ email: email.toLocaleLowerCase() }, (err, user) => {
        if (err) {
          return done(err)
        }
        if (!user) {
          return done(null, false)
        }
        console.log(user)
        if (!user.password) {
          return done(null, false, {
            msg: 'Your account was registered using a sign-in provider. To enable password login, sign in using a provider, and then set a password under your user profile.',
          })
        }
        user.comparePassword(password, (err, isMatch) => {
          console.log('!!!!!!!', err, isMatch)
          if (err) {
            return done(err)
          }
          if (isMatch) {
            return done(null, user)
          }
          return done(null, false, { msg: 'Invalid email or password.' })
        })
      })
    })
  )

  passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => done(err, user))
  })
}