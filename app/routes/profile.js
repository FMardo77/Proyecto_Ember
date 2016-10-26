import Ember from 'ember';

export default Ember.Route.extend({
	ajax: Ember.inject.service(),
	model: function(params){
		let pid = params.profile_id;

		return this.store.find('profile', pid);
	}
});
