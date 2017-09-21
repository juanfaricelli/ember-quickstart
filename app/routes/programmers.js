import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return ['Linus Torvalds', 'Ada Lovelace', 'Steve Wozniak', 'Mark Zuckerberg'];
  }
});
