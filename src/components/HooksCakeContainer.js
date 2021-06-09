import React from 'react';
import {useSelector,useDispatch} from "react-redux"
import { buyCake } from '../redux';
export default function HookCakecontainer() {
  const numOfCake=  useSelector(state =>state.cake.numOfCake)
  const dispatch= useDispatch()
  return (
    <>
    <h2>Number of cake - {numOfCake}</h2>
    <button onClick={()=>dispatch(buyCake())}>Buy cake</button>
    </>
  );
}
