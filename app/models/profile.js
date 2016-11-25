import DS from 'ember-data';

export default DS.Model.extend({
	user: DS.belongsTo('user', { async: true }),

	name: DS.attr('string'),
	lastn: DS.attr('string'),
	mail: DS.attr('string'),
	phone: DS.attr('string'),

    // anyFieldEmpty: Ember.computed.or('nameIsEmpty', 'lastnIsEmpty', 'mailIsEmpty', 'phoneIsEmpty'),
	// nameIsEmpty: Ember.computed.empty('nameIsEmpty'),
	// lastnIsEmpty: Ember.computed.empty('ast_name'),
	// mailIsEmpty: Ember.computed.empty('mail'),
	// phoneIsEmpty: Ember.computed.empty('phone')

});
