// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const avatarIdx = 0;

const handleRegistration = (context) => {
  return new Promise((resolve, reject) => {
    // needs refactoring

    const userDetailService = context.app.service('blog-posts');
    const storage = context.app.service('storage');

    const user = context.params;
    const { token } = context.params;

    if(user.avatars[avatarIdx]) {
      // upload avatar
      storage.create({uri: user.avatars[avatarIdx]}).then(
        avatar => {
          // assign avatar
          user.avatar = avatar.url;
          user.associated_acc = context.result._id;

          userDetailService.create(user).then(
            resp => {
              console.log('\n returned id \n', resp,'\n returned id \n');
              context.dispatch = { ...resp, token };
              avatarIdx++;
              resolve({context: context, registration: handleRegistration, done: false});
            }
          ).catch(
            err => {
              throw new Error(err);
            }
          );;
        }
      ).catch(
        err => {
          throw new Error(err);
        }
      );
    } else {
      resolve({context: context, registration: handleRegistration, done: true});
    }
  }).then(({context, registration, done}) => {
    registration(context);
  });
}

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    return handleRegistration(context).then(({context, registration, done}) => {
      if(done) {
        return context;
      }
    })
  };
};
