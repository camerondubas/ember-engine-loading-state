import { module, test } from 'qunit';
import {
  visit,
  currentURL,
  click,
  find,
  waitUntil,
  settled,
} from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | application', function (hooks) {
  setupApplicationTest(hooks);

  module('when visiting a lazy engine at a nested route', function () {
    test('a loading state renders while assets are being downloaded', async function (assert) {
      await visit('/');
      click('[data-test-id="nested-engine"]');

      await waitUntil(() => find('[data-test-id="app-loading"]'));
      assert.ok(find('[data-test-id="app-loading"]'));

      await settled();

      assert.equal(currentURL(), '/nested/example-engine');
    });
  });

  module('when visiting a lazy engine mounted at host root', function () {
    test('a loading state renders while assets are being downloaded', async function (assert) {
      await visit('/');
      click('[data-test-id="engine"]');

      await waitUntil(() => find('[data-test-id="app-loading"]'));
      assert.ok(find('[data-test-id="app-loading"]'));

      await settled();

      assert.equal(currentURL(), '/example-engine');
    });
  });
});
