import Ember from 'ember';

export default Ember.Route.extend({
	ajax: Ember.inject.service(),
 
 	model: function(){
  		return Ember.RSVP.hash({
    		product: this.store.createRecord('product'),
    		//type: this.store.createRecord('type')
    		type_promise: this.get('store').findAll('type').then((arrayOfTypes)=>{return arrayOfTypes}),
    		product_promise: this.get('store').findAll('type').then((arrayOfProducts)=>{return arrayOfProducts})
  		});
	},	

actions: {
		createProuduct(){//recibir id de tipo como producto y ponerselo sl producto
			let type = this.get('currentModel.type');
			let product = this.get('currentModel.product');

			product.set('type', parametro);

			product.save().then((response)=>{
					this.transitionTo('home');
				}).catch(()=>{
					debugger
				});
		},
		updateValue(value) {
   			 this.set('tipo.value', value);
   			 console.log(tipo);
  },
	}

});

