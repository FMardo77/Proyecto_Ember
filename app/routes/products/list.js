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
    		//product: this.store.createRecord('product'),
    		//type: this.store.createRecord('type')
    		productPromise: this.store.findAll('product').get('types');
    		//productPromise: this.get('store').findAll('product').then((arrayOfTypes)=>{return arrayOfTypes}),
    		type_promise: this.get('store').findAll('type').then((arrayOfTypes)=>{return arrayOfTypes}),
  		});

		//return this.store.createRecord('product', {});

		//let productPromise = this.store.findAll('product');

		// let tasksPromise = this.store.findAll('task');
		// return tasksPromise.then((arrayOfTasks)=>{
		// 		return arrayOfTasks.filter((t)=>{
		// 			if(params.view === 'past'){
		// 				return t.get('due_date') < new Date();
		// 			}
		// 			return t.get('due_date') >= new Date();
		// 		});
		// 	});
	},
	actions:{
		destroyTask(item){
			console.log('Soy el destroyTask que llamó la ruta');

			let promise = item.destroyRecord();

			promise.then((response)=>{
				this.get('currentModel').removeObject(item);
			}).catch(()=>{
				alert('No se pudo eliminar');
			});
		}
	}
});
