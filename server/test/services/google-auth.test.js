const assert = require('assert');
const app = require('../.././/app');

describe('\'google-auth\' service', () => {
  it('registered the service', () => {
    const service = app.service('google-auth');

    assert.ok(service, 'Registered the service');
  });
});
