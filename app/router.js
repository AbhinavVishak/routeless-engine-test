import EmberRouter from '@ember/routing/router';
import config from 'mytest/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.mount('routable-engine');
  this.route('host-route');
});
