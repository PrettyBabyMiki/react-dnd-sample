
import { DELETE_FOOD } from '../constants/actions';



const deleteFood = (food) => {
  return (dispatch, getState) => {
    dispatch(
      type: DELETE_FOOD,
      payload: food,
    )
  }
}
