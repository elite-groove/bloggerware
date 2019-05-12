const blogPosts = require('./blog-posts/blog-posts.service.js');
const user = require('./user/user.service.js');
const googleAuth = require('./google-auth/google-auth.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(blogPosts);
  app.configure(user);
  app.configure(googleAuth);
};
