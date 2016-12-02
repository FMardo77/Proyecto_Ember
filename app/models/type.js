import DS from 'ember-data';

export default DS.Model.extend({
	products: DS.hasMany('product', { async: true }),

	name: DS.attr('string'),
	description: DS.attr('string'),


});
