// google-auth-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const googleAuth = new mongooseClient.Schema({
  
    email: {type: String, unique: true, lowercase: true},
    password: { type: String },
  
  
  }, {
    timestamps: true
  });

  return mongooseClient.model('googleAuth', googleAuth);
};
