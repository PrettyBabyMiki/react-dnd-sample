import { DELETE_FOOD } from '../constants/actions';

const initState = [
  {
    name: 'orange',
  },
  {
    name: 'apple',
  },
  {
    name: 'cheese',
  },
  {
    name: 'pie',
  },
  {
    name: 'pizza',
  }
]



export default function availabelFoods(state = initState, action){

  if (action.type === DELETE_FOOD) {

    return [
      action.payload
    ];
  }

  return state;
}
