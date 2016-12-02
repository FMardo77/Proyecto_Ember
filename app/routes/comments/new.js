import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
	ajax: Ember.inject.service(),
	model(){
		// Inicializar un nuevo modelo de Tipo de Producto, con atributos vacíos
		return this.store.createRecord('comment', {});
},

	actions: {
		createComment(){
			let cuurentModel = this.get('currentModel');
				let promise = cuurentModel.save();

				promise.then((response)=>{
					this.transitionTo('home');
				}).catch(()=>{
					debugger
				});
		}
	}
});
