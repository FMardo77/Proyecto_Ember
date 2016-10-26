import DS from 'ember-data';

export default DS.Model.extend({
	user: DS.belongsTo('user'),
	username: DS.attr('string'),
	password: DS.attr('string'),
});
