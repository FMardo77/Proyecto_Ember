import Ember from 'ember';

export default Ember.Component.extend({
		ajax: Ember.inject.service(),
	session: Ember.inject.service('session'),

	actions:{
     invalidateSession() {
       this.get('session').invalidate();
    }
}

});
