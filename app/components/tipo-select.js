import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'select',
  classNames: ['form-control'],
  types: [],
  product: null,

  change(event) {
    const selectedLibraryId = event.target.value;
    const selectedLibrary = this.get('types').find((record) => record.id === selectedLibraryId);

    this.sendAction('action', selectedLibrary, this.get('product'));
  }
});
