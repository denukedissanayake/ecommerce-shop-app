const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./Schema/User');
import bcrypt from 'bcrypt';

passport.use(
  new LocalStrategy(async (username : string, password : string, done: any) => {
    const existingUser = await User.findOne({ username: username });
    if (!existingUser) {
      return (done(null, false))
    }
    try {
      const isValidPassword = await bcrypt.compare(password as string, existingUser.password);
      if (isValidPassword) {
        return(done(null, existingUser))
      } else {
        return(done(null, false))
      }
    } catch(e) {
      return(done(e, false))
    }
  })
)

passport.serializeUser(function (user: any, done: any) {
    done(null, user.id);
});
  
passport.deserializeUser(function(id: any, done: any) {
  User.findById(id, function (err: any, user: any) {
    const userinfo = {
      username: user.username,
      email: user.email
    }
      done(err, userinfo);
    });
});