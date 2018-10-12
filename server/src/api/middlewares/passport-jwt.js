import Passport from 'passport';
import PassportJWT from 'passport-jwt';
import ExtractJwt from 'passport-jwt';
import keys from '../../config/keys';
import User from '../ressources/users/user-model';


//A Passport strategy for authenticating with a JSON Web Token.
// This module lets you authenticate endpoints using a JSON web token. It is intended to be     used to secure RESTful endpoints without sessions.
// @https://github.com/themikenicholson/passport-jwt

export const configJWTStrategy = () => {
  const opts = {
    jwtFromRequest: PassportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: keys.secretOrKey,
  };
  Passport.use(
    new PassportJWT.Strategy(opts, (payload, done) => {
      User.findOne({
        _id: payload.id
      }, (err, user) => {
        if (err) {
          return done(err);
        }
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      });
    })
  );
};
