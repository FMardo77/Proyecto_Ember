import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin'; //Esto va en todas las rutas a las que se quiera acceder unicamente si el usuario esta autenticado

export default Ember.Route.extend(AuthenticatedRouteMixin, {
	ajax: Ember.inject.service(),
	session: Ember.inject.service('session'),

	// beforeModel(){
	// 	if(this.get('session.isAuthenticated')){
	// 		console.log('isAuthenticated: true')
	// 	}else{
	// 		this.transitionTo('login');
	// 		console.log('isAuthenticated: false')

	// 	}
	// }
});
