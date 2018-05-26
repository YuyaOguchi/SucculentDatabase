import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  rarity: DS.attr(),
  area: DS.attr(),
  category: DS.attr(),
  image: DS.attr(),
  light: DS.attr(),
  description: DS.attr()

});
