import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    filterByLocation(param) {
      if (param !== '') {
        return this.get('store').query('succulent', { city: param });
      } else {
        return this.get('store').findAll('succulent');
      }
    }
  }
});
