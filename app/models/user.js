import DS from 'ember-data';

export default DS.Model.extend({
	user: DS.belongsTo('user', { async: true }),
	
	username: DS.attr('string'),
	password: DS.attr('string'),
	//user: DS.belongsTo('user'),
	// phone: DS.attr('string'),
	// email: DS.attr('string'),
	// last_name: DS.attr('string'),

	// anyFieldEmpty: Ember.computed.or('usernameIsEmpty', 'passwordIsEmpty'),
	// usernameIsEmpty: Ember.computed.empty('usernameIsEmpty'),
	// passwordIsEmpty: Ember.computed.empty('passwordIsEmpty'),
});
