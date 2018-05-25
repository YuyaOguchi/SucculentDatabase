import { helper } from '@ember/component/helper';

const succulentsTypes = [
  'succulent'
];

export function succulentType([succType]) {
  if (succType != null){
    if (succulentsTypes.includes(succType.toLowerCase())) {
      return 'Succulent';
    }
  }
  //console.log("Detected other. Type was " + succType.toLowerCase());
  return 'Other';
}


export default helper(succulentType);
