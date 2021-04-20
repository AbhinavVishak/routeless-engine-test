import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | host-route', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:host-route');
    assert.ok(route);
  });
});
