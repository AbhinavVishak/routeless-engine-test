import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'mytest/config/environment';

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
  engines = {
    'routable-engine': {
      dependencies: {
        services: [
          'asset-loader',
        ]
      }
    }
  }
}

loadInitializers(App, config.modulePrefix);
