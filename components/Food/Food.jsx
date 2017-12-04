import React from 'react';
import { findDOMNode } from 'react-dom';
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

      // Determine rectangle on screen
		const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

		// Get vertical middle
		const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

		// Determine mouse position
		const clientOffset = monitor.getClientOffset();

		// Get pixels to the top
		const hoverClientY = clientOffset.y - hoverBoundingRect.top


    // Dragging downwards
		if (draggedElementIndex < hoverElementIndex && hoverClientY < hoverMiddleY) {
			return
		}

		// Dragging upwards
		if (draggedElementIndex > hoverElementIndex && hoverClientY > hoverMiddleY) {
			return
		}




      props.pushHoveredFood(draggedElementIndex, hoverElementIndex);



      // Note: we're mutating the monitor item here!
  		// Generally it's better to avoid mutations,
  		// but it's good here for the sake of performance
  		// to avoid expensive index searches.
      monitor.getItem().index = hoverElementIndex;


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
