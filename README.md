# ember-engine-loading-state

This repo serves as an example of a bug in Ember Engines, where a loading state is not shown while the assets for a lazily loaded engine are being downloaded if the engine is mounted to the host application's root.

Two acceptance tests were added. One demonstrates that the intended functionality works when the engine is mounted to a child route, while the other demonstrates that this functionality doesn't work when mounted to the root.

### Running Tests

Due to caching the downloaded assets in the test suite. The tests will inconsitently fail unless they are run seperately.

The `yarn run test-both` command can be run to execute both tests in sequence, ensuring consistent test results.
