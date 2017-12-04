import { DELETE_FOOD, PUSH_FOOD } from '../constants/actions';

const initState = [
  {
    name: 'orange',
    id: 0,
    opacity: 1,
  },
  {
    name: 'apple',
    id: 1,
    opacity: 1,
  },
  {
    name: 'cheese',
    id: 2,
    opacity: 1,
  },
  {
    name: 'pie',
    id: 3,
    opacity: 1,
  },
  {
    name: 'pizza',
    id: 4,
    opacity: 1,
  }
]



export default function availabelFoods(state = initState, action){

  if (action.type === DELETE_FOOD) {

    return [
      action.payload
    ];
  }

  if (action.type === PUSH_FOOD) {
    console.log('reducer availabelFoods:', action.payload.availabelFoods);
    console.log('..state:', [...state]);

    return  action.payload.availabelFoods;
  }

  return state;
}
