import Ember from 'ember';

export default Ember.Component.extend({
	ajax: Ember.inject.service(),
	session: Ember.inject.service('session'),

		actions:{
		logoutInComponent(item){
			console.log('Soy el logoutInComponent que llamó el component');

			this.sendAction('logoutOutOfComponent', item);
		},
     invalidateSession() {
       this.get('session').invalidate();
    }
 
}
});
