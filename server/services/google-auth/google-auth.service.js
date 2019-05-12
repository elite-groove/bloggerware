// Initializes the `google-auth` service on path `/google-auth`
const createService = require('feathers-mongoose');
const createModel = require('../../models/google-auth.model');
const hooks = require('./google-auth.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/google-auth', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('google-auth');

  service.hooks(hooks);
};
