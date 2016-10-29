import Ember from 'ember';

export default Ember.Controller.extend({
	queryParams: ['view'],
	view: null,

	query: null,
	anotherArray: [1,2,3,4,5],
	filteredModel: Ember.computed('query', 'model.[]', function(){
		let query = this.get('query');
		let model = this.get('model');

		if(!query){ return model; }

		return model.filter(function(menu){
			return task.get('name').indexOf(query) != -1;
		});
	}),
	menusCountLabel: Ember.computed('query', 'filteredModel.[]', 'model.[]', function(){
		let modelLength = this.get('model.length');
		let filteredModelLength = this.get('filteredModel.length');
		let query = this.get('query');

		if(!query){ return `${modelLength} menus`; }
		else{
			if( filteredModelLength === 0){
				return `No menus found that matches "${query}"`;
			}else{
				debugger;
				return `${filteredModelLength} of ${modelLength} menus`;
			}
		}
	}),

	actions:{
		completarencontroller(item){
			//complete: this.set('currentModel.complete');

		},
		toggleCompleteTask(menu){
			//task.set('complete', event.target.checked)
		//	task.save();
		}
	}
});