import React,{Component} from 'react'
import Context from '../utils/context'
class HomeChild extends Component{
    render(){
        return (<div>
            <Context.Consumer>
                {
                    (store)=>{
                        return <div>{store.luhao.a}</div>
                    }
                }
            </Context.Consumer>
            </div>)
    }
}
export default HomeChild