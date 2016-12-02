import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		destroyTaskInController(item){
			console.log('Soy el destroyTaskInController que llamó el Controller');
			this.send('destroyTask', item);
		}
	}
});
