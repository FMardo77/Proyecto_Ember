import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
	ajax: Ember.inject.service(),

 setupController: function(controller, model) {
  controller.set('user', model.user);
  controller.set('profile', model.profile);
},

   model: function(){
  		return Ember.RSVP.hash({
    		user: this.store.createRecord('user'),
    		profile: this.store.createRecord('profile')
  		});
	},	


	actions: {
		crearUsuario(){
			let user = this.get('currentModel.user');
			let profile = this.get('currentModel.profile');

			user.save().then((u)=>{
				profile.set('user', u);
				profile.save();
			})
			// let currentModel = this.get('currentModel');
			// if(currentModel.get('anyFieldEmpty')){
			// 	$('#validationModal').modal('show');
			// } else {			
			// 	let promise = currentModel.save();

			// 	promise.then((response)=>{
			// 		this.transitionTo('home');
			// 	}).catch(()=>{
			// 		debugger
			// 	});
			// }
			//  var user = this.controller.get('user');
 		// 	 var profile = this.controller.get('profile');

 		// 	 user.get('profile').pushObject(profile);
 		// 	 profile.set('user', user);

 		// 	user.save().then(function() {
   // 			this.transitionTo('home');
		 // });
		}
	}

});
