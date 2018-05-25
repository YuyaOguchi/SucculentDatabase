import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | list succulents', function(hooks) {
  setupApplicationTest(hooks);

  //Homepage loads
  test('visiting /', async function(assert) {
    await visit('/');
    assert.equal(currentURL(), '/');
  });
});
