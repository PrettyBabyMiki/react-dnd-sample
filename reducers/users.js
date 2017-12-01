
import { ADD_USERS } from '../constants/actions';


export default function users(state = [], action){

  if (action.type === ADD_USERS) {

    return [
      action.payload
    ];
  }

  return state;
}
