import DS from 'ember-data';

export default DS.Model.extend({
	profile: DS.belongsTo('profile'),
	ast_name: DS.attr('string'),
	mail: DS.attr('string'),
	phone: DS.attr('string'),

	// anyFieldEmpty: Ember.computed.or('ast_nameIsEmpty', 'mailIsEmpty', 'phoneIsEmpty'),
	//  ast_nameIsEmpty: Ember.computed.empty('ast_name'),
	//  mailIsEmpty: Ember.computed.empty('mail'),
	// phoneIsEmpty: Ember.computed.empty('phone')

});
