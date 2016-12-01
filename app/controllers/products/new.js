import Ember from 'ember';

export default Ember.Controller.extend({
 eltipo: null,
 vehicles: Ember.String.w('Tesla Chrysler Toyota'),
  actions: {
    selectTipo(eltipo) {
      this.set('eltipo', eltipo);
    },
    		createProuduct(){//recibir id de tipo como producto y ponerselo sl producto
			let type = this.get('currentModel.type_promise');
			let product = this.get('currentModel.product');

				type.save().then((t)=>{
					product.set('type', t);
				product.save();
				this.transitionToRoute('products/new', currentModel.type_promise);
			})
		}
  }
});
