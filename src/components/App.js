import React from "react"
import {connect} from "react-redux"
import { INCREMENT, DECREMENT } from "../action/action-types";

class Counter extends React.Component {

    state ={count:0}

    increment = ()=>{
    this.props.dispatch({type:INCREMENT})
    }
    
    decrement =()=>{
     this.props.dispatch({type:DECREMENT})
    }
   
    render() {
        return (
            <div>
                <h2>Counter</h2>
                <div>
                    <button onClick={this.increment}>+</button>
                    <span>{this.props.count}</span>
                    <button onClick={this.decrement}>-</button>
                </div>
            </div>

        )

    }
}

function mapStateToProps(state){
    return{
        count:state.count
    }
}
export default connect(mapStateToProps)(Counter);