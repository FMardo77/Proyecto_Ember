import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'select',
	class: 'selectpicker',
	//selectedOpportunityId: null,
	didInsertElement: function(){
    this.$().select();
    Ember.run.scheduleOnce('afterRender', this, () => (this.get.$('element')).select());
//			Ember.run.scheduleOnce('afterRender', this, () => this.$().selectpicker());
	}
});