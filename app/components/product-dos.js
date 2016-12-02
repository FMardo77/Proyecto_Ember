import Ember from 'ember';

export default Ember.Component.extend({
	actions:{
 		agregar(item) {
 		this.controller.set('toggleChecked', !this.controller.get('toggleChecked'));
 		this.sendAction('completadaOut', item);
 		}
	}
});