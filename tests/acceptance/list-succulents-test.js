import { module, test } from 'qunit';
import { click, visit, currentURL, fillIn, triggerKeyEvent } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | list succulents', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);
  
  test('should show /succulents as the home page', async function (assert) {
      await visit('/');
      assert.equal(currentURL(), '/succulents', 'should redirect automatically');
  });

  test('should link to about page', async function(assert) {
      await visit('/');
      await click(".menu-about");
      assert.equal(currentURL(), '/about', 'should navigate to about');
  });

  test('should link to contact information', async function(assert) {
      await visit('/');
      await click(".menu-contact");
      assert.equal(currentURL(), '/contact', 'should navigate to contact');
  });

  test('should list all 3 succulents.', async function(assert) {
      await visit('/');
      assert.equal(this.element.querySelectorAll('.listing').length, 3, 'should display 3 listings');
  });

  test('should filter the list of succulents by city', async function(assert) {
      await visit('/');
      await fillIn('.list-filter input', 'Succulent City2');
      await triggerKeyEvent('.list-filter input', 'keyup', 69);
      assert.equal(this.element.querySelectorAll('.results .listing').length, 1, 'should display 1 listing');
      assert.ok(this.element.querySelector('.listing .location').textContent.includes('Succulent City'), 'should contain 1 listing with location Succulent City');
  });


  test('should show details for a specific succulent', async function(assert) {
      await visit('/succulents');
      await click(".succ1");
      assert.equal(currentURL(), '/succulents/succ1', "should navigate to show route");
      assert.ok(this.element.querySelector('.show-listing h2').textContent.includes("Succulent1"), 'should list succulent title');
      assert.ok(this.element.querySelector('.show-listing .description'), 'should list a description of the property');
  });

});
