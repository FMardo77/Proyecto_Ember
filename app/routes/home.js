import Ember from 'ember';
import RSVP from 'rsvp';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin'; //Esto va en todas las rutas a las que se quiera acceder unicamente si el usuario esta autenticado

export default Ember.Route.extend(AuthenticatedRouteMixin, {
	ajax: Ember.inject.service(),
	session: Ember.inject.service('session'),


queryParams: {
		view: {
			refreshModel: true
		}
	},

	// beforeModel(){
	// 	if(this.get('session.isAuthenticated')){
	// 		console.log('isAuthenticated: true')
	// 	}else{
	// 		this.transitionTo('login');
	// 		console.log('isAuthenticated: false')
	// 	}
	// },
	// model
	// Lo que esta funcion regrese, se va a pasar al template en forma de una
	// variable llamada "model"
	model: function(params){
		    return RSVP.hash({
      		 	product_promise: this.get('store').findAll('product').then((arrayOfProducts)=>{return arrayOfProducts}),

		des_promise: this.get('store').findAll('product')
		.then(arrayOfTasks=>{arrayOfTasks.filter((t)=>{
			return t.get('type_id') === '1';
				}),
			});
	},
	  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    }
  }
	

	// beforeModel(){
	// 	if(this.get('session.isAuthenticated')){
	// 		console.log('isAuthenticated: true')
	// 	}else{
	// 		this.transitionTo('login');
	// 		console.log('isAuthenticated: false')

	// 	}
	// }
});
