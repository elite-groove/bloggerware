// Initializes the `blog-posts` service on path `/blog-posts`
const createService = require('feathers-mongoose');
const createModel = require('../../models/blog-posts.model');
const hooks = require('./blog-posts.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/blog-posts', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('blog-posts');

  service.hooks(hooks);
};
