import React from 'react';
import { DropTarget } from 'react-dnd';


import { ItemTypes } from '../../constants/dndCompTypes';


/**
* High order components.
*/
// import Menu from '../Menu/Menu.jsx';

/**
* Styles.
*/
 import { boxStyle } from './Box.css';




 const boxTarget = {
   drop(props, monitor) {
    //  moveKnight(props.x, props.y);
   }
 };

 function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}



class Box extends React.Component {

  constructor(props){
    super(props);


  }




  render(){

    const { connectDropTarget } = this.props;

    return connectDropTarget(
      <div className={boxStyle}>

      </div>
    );
  }

}


export default DropTarget(ItemTypes.FOOD, boxTarget, collect)(Box);
