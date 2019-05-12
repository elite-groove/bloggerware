// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    
    const tokenPromise = new Promise((resolve, reject)=> {
      context.app.service('authentication').create({ ...context.data }).then(
        token => {
          context.result.token = token;
          resolve(context);
        }
      ).catch(
        err => {
          reject(err)
        }
      );
    })

    return tokenPromise.then(newContext => {
      return newContext;
    }).catch(err => {
      throw new Error(err);
    })
  };
};
