import DS from 'ember-data';

export default DS.Model.extend({
//	user: DS.belongsTo('user'),
	name: DS.attr('string'),
	username: DS.attr('string'),
	password: DS.attr('string'),
	phone: DS.attr('string'),
	email: DS.attr('string'),
	last_name: DS.attr('string'),
});
