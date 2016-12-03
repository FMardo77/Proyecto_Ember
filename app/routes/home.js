import Ember from 'ember';
import RSVP from 'rsvp';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin'; //Esto va en todas las rutas a las que se quiera acceder unicamente si el usuario esta autenticado

export default Ember.Route.extend(AuthenticatedRouteMixin, {
	ajax: Ember.inject.service(),
	session: Ember.inject.service('session'),
	shoppingCart: Ember.inject.service('shopping-cart'),


queryParams: {
		view: {
			refreshModel: true
		}
	},
	model: function(params){
		    return RSVP.hash({
      		 	product_promise: this.get('store').findAll('product').then((arrayOfProducts)=>{return arrayOfProducts}),
		});
	},
	  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    }
  }

});
