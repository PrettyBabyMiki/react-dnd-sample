import React from 'react';
import { DragSource, DropTarget } from 'react-dnd';



import { ItemTypes } from '../../constants/dndCompTypes';

/**
* High order components.
*/
// import Menu from '../Menu/Menu.jsx';

/**
* Styles.
*/
 import { foodStyle } from './Food.css';








const foodSource = {
  beginDrag(props) {


    return {
      id:   props.id,
      index: props.index,
    };
  }
};



function collect(connect, monitor) {


  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}


const foodTarget = {
  hover(props, monitor, component) {
      // console.log('monitor index', monitor.getItem().index);
      // console.log('component', component);

      const draggedElementIndex = monitor.getItem().index;
      const hoverElementIndex = props.index;



      props.pushHoveredFood(draggedElementIndex, hoverElementIndex);
  },
};


function connectTarget(connect){
  return{
    connectDropTarget: connect.dropTarget(),
  }
}






class Food extends React.Component {


  constructor(props) {
    super(props);




  }


















  render(){

    const {
     text,
     isDragging,
     connectDragSource,
     connectDropTarget,
} = this.props
    console.log('isDragging', isDragging);
    const opacity = isDragging ? 0 : 1;

    return connectDragSource(
              connectDropTarget(
                <div className={foodStyle} style={{opacity: opacity}}>
                  {this.props.value}
                </div>
              ),
    );
  }

}

Food = DragSource(ItemTypes.FOOD, foodSource, collect)(Food);
Food = DropTarget(ItemTypes.FOOD, foodTarget, connectTarget)(Food);

export default Food;
