var events = Npm.require('events');

_.extend(Meteor, {
  instrumentation: new events.EventEmitter()
});
