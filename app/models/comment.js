import DS from 'ember-data';

export default DS.Model.extend({

	mail: DS.attr('string'),
	text: DS.attr('string'),

});
