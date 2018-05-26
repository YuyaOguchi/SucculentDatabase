import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';

module('Integration | Component | succulent-listing', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.succulent = EmberObject.create({
      image: 'fake.png',
      title: 'test-title',
      rarity: 'test-rarity',
      type: 'test-type',
      city: 'test-city',
      bedrooms: 3
    });
  });

  test('should display succulent details', async function(assert) {
    await render(hbs`{{succulent-listing succulent=succulent}}`);
    assert.equal(this.$('.listing h3').text(), 'test-title', 'Title: test-title');
    assert.equal(this.$('.listing .rarity').text().trim(), 'Rarity: test-rarity', 'Owner: test-owner');
  });

  test('should toggle wide class on click', async function(assert) {
    await render(hbs`{{succulent-listing succulent=succulent}}`);
    assert.notOk(this.element.querySelector('.image.wide'), 'initially rendered small');
    await click('.image');
    assert.ok(this.element.querySelector('.image.wide'), 'rendered wide after click');
    await click('.image');
    assert.notOk(this.element.querySelector('.image.wide'), 'rendered small after second click');
  });


});
