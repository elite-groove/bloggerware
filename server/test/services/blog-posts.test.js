const assert = require('assert');
const app = require('../.././/app');

describe('\'blog-posts\' service', () => {
  it('registered the service', () => {
    const service = app.service('blog-posts');

    assert.ok(service, 'Registered the service');
  });
});
