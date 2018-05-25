import Route from '@ember/routing/route';

export default Route.extend({
model() {
    return [{
      id: 'succ1',
      title: 'succulent1',
      owner: 'Me',
      city: 'succulent city',
      category: 'Succulent',
      bedrooms: 3,
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
      description: 'This is one hell of a nice succulent!'
    }, {
      id: 'succ2',
      title: 'succulent2',
      owner: 'Me',
      city: 'succulent city2',
      category: 'succulent',
      bedrooms: 3,
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
      description: 'This is one hell of a nice succulent!'
    }, {
      id: 'succ3',
      title: 'succulent3',
      owner: 'Me',
      city: 'succulent city3',
      category: 'Succulent',
      bedrooms: 3,
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
      description: 'This is one hell of a nice succulent!'
    }];
  }
});
