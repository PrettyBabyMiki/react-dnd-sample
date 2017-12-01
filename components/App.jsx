import React from 'react';
import { connect } from 'react-redux';
import {  DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
// import queryString from 'query-string';


import * as AvailabelFoodActionCreators  from '../actions/availabel_foods';

/**
* High order components.
*/
 import Food from './Food/Food.jsx';
 import Box from './Box/Box.jsx';

/**
* Styles.
*/
 import { boxStyle } from './App.css';












 class App extends React.Component {

  constructor(props){
    super(props);



  }




  render(){
    return (
      <div>
        {this.props.availabelFoods.map((food, index, arr) => {
          return(
            <Food value={food.name} />
          )
        })}



        

      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
      availabelFoods: state.availabelFoods,
  }

};


const mapDispatchToProps = (dispatch) => ({
  availabelFoodsActions: bindActionCreators(AvailabelFoodActionCreators, dispatch),
});

App = DragDropContext(HTML5Backend)(App);
App = connect(mapStateToProps, mapDispatchToProps)(App)

export default App;
