import DS from 'ember-data';

export default DS.Model.extend({
	type: DS.belongsTo('type'),
	name: DS.attr('string'),
	description: DS.attr('string'),
	price: DS.attr('number'),
	available: DS.attr('boolean'),
	//tipo: DS.attr(),

});
