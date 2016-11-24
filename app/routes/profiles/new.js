import Ember from 'ember';

export default Ember.Route.extend({
	ajax: Ember.inject.service(),


    // var profile = this.profile;
    // return profile.find('id').then(function() {  // success function, we got the entries so now we request definitions
    //     store.find('id');
    // }

   model(){
	 	return this.store.createRecord('user', {});
},
	actions: {
		crearPerfil(){
			let cuurentModel = this.get('currentModel');
			if(cuurentModel.get('anyFieldEmpty')){
				$('#validationModal').modal('show');
			} else {
				let promise = cuurentModel.save();

				promise.then((response)=>{
					this.transitionTo('home');
				}).catch(()=>{
					debugger
				});
			}
		}
	}

});
