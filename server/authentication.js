const authentication = require('@feathersjs/authentication');
const jwt = require('@feathersjs/authentication-jwt');
const local = require('@feathersjs/authentication-local');
const oauth2 = require('@feathersjs/authentication-oauth2');
const createHandler = require('./handlers/oauth-handler');

const { Strategy } = require('passport-google-oauth2');

class CustomVerifier {
  // The verify function has the exact same inputs and 
  // return values as a vanilla passport strategy
  verify(req, accessToken, refreshToken, profile, done) {
    // do your custom stuff. You can call internal Verifier methods
    // and reference this.app and this.options. This method must be implemented.

    // the 'user' variable can be any truthy value
    // the 'payload' is the payload for the JWT access token that is generated after successful authentication
    req.body.token = accessToken;
    // req.body.tokenSecret = tokenSecret;
    req.body.profile = profile;
    done(null, true, req.body);
  }
}

module.exports = function (app) {
  const config = app.get('authentication');
  const handler = createHandler(app);
  // Set up authentication with the secret
  app.configure(authentication(config));
  app.configure(jwt());
  app.configure(local());
  app.configure(oauth2({
    name: 'google',
    Strategy,
    clientID: process.env[config.google.clientID],
    clientSecret: process.env[config.google.clientSecret],
    scope: ['https://www.googleapis.com/auth/userinfo.email'],
    handler: handler(`http://${app.get('host')}:${app.get('port')}/callback`)
  }));

  // The `authentication` service is used to create a JWT.
  // The before `create` hook registers strategies that can be used
  // to create a new valid JWT (e.g. local or oauth2)
  app.service('authentication').hooks({
    before: {
      create: [
        authentication.hooks.authenticate(config.strategies)
      ],
      remove: [
        authentication.hooks.authenticate('jwt')
      ]
    }
  });
};
