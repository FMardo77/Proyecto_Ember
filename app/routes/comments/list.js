import Ember from 'ember';
// Esto va en todas las rutas a las que se quiera acceder unicamente si esta el usuario autenticado:
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
	ajax: Ember.inject.service(),
	session: Ember.inject.service('session'),

	queryParams: {
		view: {
			refreshModel: true
		}
	},
	model: function(params){
		  		return Ember.RSVP.hash({
    		//productPromise: this.store.findAll('product').get('types');
    		comment_promise: this.get('store').findAll('comment').then((arrayOfComments)=>{return arrayOfComments}),
  		});
	},
	actions:{
		destroyTask(item){
			console.log('Soy el destroyTask que llamó la ruta');

			let promise = item.destroyRecord();

			promise.then((response)=>{
				this.get('currentModel').removeObject(item);
			}).catch(()=>{
				//alert('No se pudo eliminar');
			});
		}
	}
});