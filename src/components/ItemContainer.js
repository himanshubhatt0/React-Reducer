import React from 'react';
import {connect} from "react-redux"
import { buyCake, buyIceCream } from '../redux';
 function ItemContainer(props) {
     console.log("props",props)
  return (
    <>
    <h2>Item -{props.item}</h2>
   <button onClick={props.buyItem}>Buy item</button>
    </>
  );
}
const mapStatetoProps =(state,ownProps)=>{
    const itemState =ownProps.cake ? state.cake.numOfCake : state.iceCream.numOFIceCreams
    return{
        item :itemState
    }
}
const mapDispatchToProps =(dispatch,ownProps)=>{
    const dispatchFuction =ownProps.cake ? ()=> dispatch(buyCake()) :()=>dispatch(buyIceCream())
    return{
        buyItem :dispatchFuction
    }
}
export default connect(mapStatetoProps,mapDispatchToProps)(ItemContainer)
