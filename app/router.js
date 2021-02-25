import EmberRouter from '@ember/routing/router';
import config from 'ember-engine-loading-state/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.mount('example-engine');
  this.route('nested', function () {
    this.mount('example-engine');
  });
});
