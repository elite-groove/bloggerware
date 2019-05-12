const blogPosts = require('./blog-posts/blog-posts.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(blogPosts);
};
