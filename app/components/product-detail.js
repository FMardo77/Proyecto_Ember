import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service('shopping-cart'),

  actions: {
    addToCart(item) {
    	console.log(item.id);
      this.get('shoppingCart').add(item);
     // this.get('arr_prod').pushObject(item);
    }
}
});
