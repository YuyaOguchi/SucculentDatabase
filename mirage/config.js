export default function() {
  this.namespace = '/api';

  let succulents = [{
        type: 'succulent',
        id: 'Aeonium Lily Pad',
        attributes: {
          title: 'Aeonium Lily Pad',
          rarity: 5,
          area: 'all',
          category: 'Succulent',
          light: 5,
          image: 'https://c2.staticflickr.com/2/1732/28480900138_b47545a020.jpg',
          description: 'Nice and leafy plant which is fairly easy to take care of.'
        }
      }, {
        type: 'succulent',
        id: 'succ2',
        attributes: {
          title: 'Succulent2',
          rarity: 3,
          area: 'NA',
          category: 'Succulent',
          light: 2,
          image: 'https://c2.staticflickr.com/2/1732/28480900138_b47545a020.jpg',
          description: 'Nice and leafy plant'
        }
      }, {
        type: 'succulent',
        id: 'succ3',
        attributes: {
          title: 'Succulent3',
          rarity: 1,
          area: 'Europe',
          category: 'Succulent',
          light: 3,
          image: 'https://c2.staticflickr.com/2/1732/28480900138_b47545a020.jpg',
          description: 'Nice and leafy plant'
        }
      }];

  

  this.get('/succulents', function(db, request) {
    if(request.queryParams.area !== undefined) {
      let filteredSucculents = succulents.filter(function(i) {
        return i.attributes.area.toLowerCase().indexOf(request.queryParams.area.toLowerCase()) !== -1;
      });
      return { data: filteredSucculents };
    } else {
      return { data: succulents };
    }
  });


  // Find and return the provided rental from our rental list above
  this.get('/succulents/:id', function (db, request) {
    return { data: succulents.find((succulent) => request.params.id === succulent.id) };
  });

}

