export default function() {
  this.namespace = '/api';

  let succulents = [{
        type: 'succulent',
        id: 'succ1',
        attributes: {
          title: 'Succulent1',
          owner: 'Me',
          city: 'Succulent City',
          category: 'Succulent',
          bedrooms: 1,
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
        }
      }, {
        type: 'succulent',
        id: 'succ2',
        attributes: {
          title: 'Succulent2',
          owner: 'Me',
          city: 'Succulent City2',
          category: 'Succulent',
          bedrooms: 2,
          image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
        }
      }, {
        type: 'succulent',
        id: 'succ3',
        attributes: {
          title: 'Succulent3',
          owner: 'Me',
          city: 'Succulent city3',
          category: 'Succulent',
          bedrooms: 3,
          image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg'
        }
      }];
    this.get('/succulents', function(db, request) {
    if(request.queryParams.city !== undefined) {
      let filteredSucculents = succulents.filter(function(i) {
        return i.attributes.city.toLowerCase().indexOf(request.queryParams.city.toLowerCase()) !== -1;
      });
      return { data: filteredSucculents };
    } else {
      return { data: succulents };
    }
  });
}

