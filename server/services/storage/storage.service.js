// Initializes the `storage` service on path `/storage`
const hooks = require('./storage.hooks.js');
const multer = require('multer');
const multipartMiddleware = multer();

const blobService = require('feathers-blob');
const fs = require('fs-blob-store');

module.exports = function (app) {
  const blobStorage = fs(app.get('public') + '/uploads');

  const options = {
    Model: blobStorage
  };

  // Initialize our service with any options it requires
  app.use('/storage',
    // multer parses the file named 'uri'.
    // Without extra params the data is
    // temporarely kept in memory,
    multipartMiddleware.single('file'),
    // another middleware, this time to
    // transfer the received file to feathers
    function (req, res, next) {
      console.log(req);
      req.feathers.file = req.file;
      next();
    },

    blobService(options)
  );

  // Get our initialized service so that we can register hooks
  const service = app.service('storage');

  service.hooks(hooks);
};
