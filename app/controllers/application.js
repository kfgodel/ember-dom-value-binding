import Controller from '@ember/controller';
import {computed, observer} from '@ember/object';
import Ember from 'ember';

export default Controller.extend({

  computedValue: computed({
    get() {
      return 'Hello';
    },
    set() {
      return 'World';
    }
  }),

  computedValueChanged: observer('computedValue', function () {
    Ember.Logger.info('Value changed: ', this.get('computedValue'));
  })
});
