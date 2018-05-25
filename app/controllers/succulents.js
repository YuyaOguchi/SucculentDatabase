import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    filterByLocation(param) {
      if (param !== '') {
        return this.get('store')
          .query('succulent', { city: param }).then((results) => {
            return { query: param, results: results };
          });
      } else {
        return this.get('store')
          .findAll('succulent').then((results) => {
            return { query: param, results: results };
          });
      }
    }
  }
});
