
import { DELETE_FOOD, PUSH_FOOD } from '../constants/actions';



const deleteFood = (food) => {
  return (dispatch, getState) => {
    dispatch(
      type: DELETE_FOOD,
      payload: food,
    )
  }
}


const pushFood = (data) => {
  return  {
      type: PUSH_FOOD,
      payload: data,
    }
};


export const pushHoveredFood = (druggedElementIndex, hoveredElementIndex) => {
  return (dispatch, getState) => {
    const availabelFoods = getState().availabelFoods;


    if (druggedElementIndex === hoveredElementIndex) {
      availabelFoods[hoveredElementIndex].name = 'new name';
    }


    return dispatch(pushFood(availabelFoods));
  }
}
