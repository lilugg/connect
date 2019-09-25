import React,{Component} from 'react'
import connect from '../utils/connect'
import HomeChild from './homeChild'
class Home extends Component{
    constructor(props, context) {
        super(props, context)
        this.state={
            num:11
        }
    }
    
    render(){
        return (<div>
            {this.props.lu.c}
                        <HomeChild/>
              </div>)
    }
}
export default connect((store)=>{
  return{lu:{...store.lilu}}
})(Home)